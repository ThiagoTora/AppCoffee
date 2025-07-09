import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutForm } from "./components/Form/CheckoutForm";
import { PedidoConfirmado } from "./components/ConfirmLocal/PedidoConfirmado";
import { useEffect, useState } from "react";
import  { type cycleFormData, newCycleFormValidationSchema } from "../../types/types";
import { MainContainer } from "./styles";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { useContext } from "react";

export function Checkout() {
  const methods = useForm<cycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      pagamento: undefined,
    },
  });

  const { watch, reset, setValue } = methods;
  const pagamentoSelecionado = watch("pagamento");
  const cepDigitado = watch("cep");

  const [dadosConfirmados, setDadosConfirmados] = useState<cycleFormData | null>(null);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  const { carrinho, setCarrinho, calcularTotalItens, limparCarrinho } = useContext(CarrinhoContext);

  useEffect(() => {
    const cep = cepDigitado.replace(/\D/g, "");
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.erro) {
            setValue("rua", data.logradouro || "");
            setValue("bairro", data.bairro || "");
            setValue("cidade", data.localidade || "");
            setValue("uf", data.uf || "");
          }
        });
    }
  }, [cepDigitado, setValue]);

  function aumentarQuantidade(id: number) {
    setCarrinho(prev =>
      prev.map(item => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item)
    );
  }

  function diminuirQuantidade(id: number) {
    setCarrinho(prev =>
      prev.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      ).filter(item => item.quantidade > 0)
    );
  }

  function removerItem(id: number) {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  }

  function onConfirmarPedido(data: cycleFormData) {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    setDadosConfirmados(data);
    limparCarrinho();
    reset();
    setPedidoConfirmado(true);
  }

  return (
    <MainContainer>
      {pedidoConfirmado && dadosConfirmados ? (
        <PedidoConfirmado dados={dadosConfirmados} />
      ) : (
        <FormProvider {...methods}>
          <CheckoutForm
            carrinho={carrinho}
            pagamentoSelecionado={pagamentoSelecionado}
            aumentarQuantidade={aumentarQuantidade}
            diminuirQuantidade={diminuirQuantidade}
            removerItem={removerItem}
            calcularTotalItens={calcularTotalItens}
            onConfirmarPedido={onConfirmarPedido}
          />
        </FormProvider>
      )}
    </MainContainer>
  );
}
