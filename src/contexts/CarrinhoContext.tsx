import { createContext, useState, useEffect } from "react";
import { type ReactNode } from "react";
import { type ItemCarrinho, type ItemLocalStorage } from "../types/types";


interface CarrinhoContextType {
  carrinho: ItemCarrinho[];
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
  calcularTotalItens: () => number;
  limparCarrinho: () => void;
}

export const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("carrinho");
    if (data) {
      const parsed: ItemLocalStorage[] = JSON.parse(data);
      const mapped: ItemCarrinho[] = parsed.map((item) => ({
        ...item.cafe,
        quantidade: item.quantidade,
      }));
      setCarrinho(mapped);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "carrinho",
      JSON.stringify(
        carrinho.map((item) => ({
          cafe: {
            id: item.id,
            nome: item.nome,
            imagem: item.imagem,
            preco: item.preco,
          },
          quantidade: item.quantidade,
        }))
      )
    );
  }, [carrinho]);

  function calcularTotalItens() {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
    localStorage.removeItem("carrinho");
  }

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, setCarrinho, calcularTotalItens, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
