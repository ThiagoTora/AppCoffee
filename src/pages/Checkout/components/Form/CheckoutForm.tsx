import {
  CartContainer,
  FormContainer,
  CheckoutContainer,
  Input1,
  Input2,
  Input3,
  InputLocal,
  PayPlace,
  TittleLocal,
  TittlePayPlace,
  ButtonsContainer,
  ButtonTypePayment,
  ItemListContainer,
  ItemContainer,
  ButtonCart,
  ButtonQuant,
  InfoConfirm,
} from "./styles";
import { CreditCard, Bank, Money, DeviceMobile, CurrencyDollar, MapPin } from "phosphor-react";
import type { cycleFormData, PagamentoOpcao, ItemCarrinho } from "../../../../types/types";
import { useFormContext } from "react-hook-form";

interface CheckoutFormProps {
  carrinho: ItemCarrinho[];
  pagamentoSelecionado: PagamentoOpcao | undefined;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  removerItem: (id: number) => void;
  calcularTotalItens: () => number;
  onConfirmarPedido: (data: cycleFormData) => void;
}

export function CheckoutForm({
  carrinho,
  pagamentoSelecionado,
  aumentarQuantidade,
  diminuirQuantidade,
  removerItem,
  calcularTotalItens,
  onConfirmarPedido,
}: CheckoutFormProps) {
  const { register, handleSubmit, setValue } = useFormContext<cycleFormData>();

  return (
    <CheckoutContainer>
      <FormContainer>
        <InputLocal>
          <TittleLocal>
            <MapPin />
            <div>
              <h1>Endereço de Entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </TittleLocal>

          <form>
            <Input1>
              <input placeholder="CEP" {...register("cep")} />
              <input placeholder="RUA" {...register("rua")} />
            </Input1>
            <Input2>
              <input placeholder="Número" {...register("numero")} />
              <input placeholder="Complemento (Opcional)" {...register("complemento")} />
            </Input2>
            <Input3>
              <input placeholder="Bairro" {...register("bairro")} />
              <input placeholder="Cidade" {...register("cidade")} />
              <input
                placeholder="UF"
                maxLength={2}
                {...register("uf")}
                onInput={(e) => {
                  const input = e.currentTarget;
                  input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
                }}
              />
            </Input3>
          </form>
        </InputLocal>

        <PayPlace>
          <TittlePayPlace>
            <CurrencyDollar />
            <div>
              <h1>Pagamento</h1>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </TittlePayPlace>

          <ButtonsContainer>
            {(["Credito", "Debito", "Dinheiro", "Pix"] as PagamentoOpcao[]).map((opcao) => (
              <label key={opcao}>
                <input type="radio" value={opcao} {...register("pagamento")} hidden />
                <ButtonTypePayment
                  type="button"
                  isActive={pagamentoSelecionado === opcao}
                  onClick={() => setValue("pagamento", opcao)}
                >
                  {opcao === "Credito" && <CreditCard />}
                  {opcao === "Debito" && <Bank />}
                  {opcao === "Dinheiro" && <Money />}
                  {opcao === "Pix" && <DeviceMobile />}
                  {` ${opcao.toUpperCase()}`}
                </ButtonTypePayment>
              </label>
            ))}
          </ButtonsContainer>
        </PayPlace>
      </FormContainer>

      <CartContainer>
        <h3>
          Carrinho ({carrinho.length} {carrinho.length === 1 ? "item" : "itens"})
        </h3>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ItemListContainer>
              {carrinho.map((item) => (
                <ItemContainer key={item.id}>
                  <img src={item.imagem} alt={item.nome} />
                  <div style={{ flex: 1 }}>
                    <strong>{item.nome}</strong>
                    <ButtonCart>
                      <ButtonQuant>
                        <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                      </ButtonQuant>
                      <button onClick={() => removerItem(item.id)}>Remover</button>
                    </ButtonCart>
                  </div>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </ItemContainer>
              ))}
            </ItemListContainer>

            <InfoConfirm>
              <h1>Total: R$ {(calcularTotalItens() + 3.5).toFixed(2)}</h1>
              <span>(Entrega R$ 3,50)</span>
              <form onSubmit={handleSubmit(onConfirmarPedido)}>
                <button type="submit">Confirmar Pedido</button>
              </form>
            </InfoConfirm>
          </div>
        )}
      </CartContainer>
    </CheckoutContainer>
  );
}
