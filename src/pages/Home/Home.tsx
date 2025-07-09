import {
  BotaoQuantidade,
  BuyLocal,
  Card,
  Cards,
  CartButton,
  Descricao,
  DescricaoCoffee,
  DescriptionCardLocal,
  DescriptionContainer,
  IconContainer,
  ImgAndTagLocal,
  LojaContainer,
  MainContainer,
  Price,
  Tag,
  TagGroup,
  Tittle
} from "./styles";

import CoffeeLogo from "../../assets/CoffeeLogo.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext, useState } from "react";
import { cafes } from "../../components/Cafes/CoffeeCatalog";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { type Cafe } from "../../types/types";

export function Home() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const [quantidades, setQuantidades] = useState<{ [id: number]: number }>({});

  function increment(id: number) {
    setQuantidades((state) => ({
      ...state,
      [id]: (state[id] ?? 0) + 1,
    }));
  }

  function decrement(id: number) {
    setQuantidades((state) => ({
      ...state,
      [id]: state[id] > 0 ? state[id] - 1 : 0,
    }));
  }

  function handleAdicionar(cafe: Cafe) {
    const quantidade = quantidades[cafe.id] ?? 0;
    if (quantidade <= 0) return;

    const index = carrinho.findIndex(item => item.id === cafe.id);

    if (index >= 0) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade += quantidade;
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...cafe, quantidade }]);
    }

    setQuantidades((state) => ({ ...state, [cafe.id]: 0 }));
  }

  return (
    <MainContainer>
      <DescriptionContainer>
        <Descricao>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </span>
          <div>
            <ul>
              <li>
                <IconContainer variant="yellow-500">
                  <ShoppingCart weight="fill" />
                </IconContainer>
                Compra simples e segura
              </li>
              <li>
                <IconContainer variant="gray-500">
                  <Package weight="fill" />
                </IconContainer>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconContainer variant="yellow-300">
                  <Timer weight="fill" />
                </IconContainer>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconContainer variant="purple-100">
                  <Coffee weight="fill" />
                </IconContainer>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
        </Descricao>
        <img src={CoffeeLogo} alt="Logo do Café" />
      </DescriptionContainer>

      <LojaContainer>
        <h1>Nossos Cafés</h1>
        <hr />
        <Cards>
          {cafes.map((cafe) => (
            <Card key={cafe.id}>
              <ImgAndTagLocal>
                <img src={cafe.imagem} alt={cafe.nome} />
                <TagGroup>
                  {cafe.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagGroup>
              </ImgAndTagLocal>

              <DescriptionCardLocal>
                <Tittle>{cafe.nome}</Tittle>
                <DescricaoCoffee>{cafe.descricao}</DescricaoCoffee>
              </DescriptionCardLocal>

              <BuyLocal>
                <Price>
                  <strong>{cafe.preco.toFixed(2)}</strong>
                </Price>

                <BotaoQuantidade>
                  <button onClick={() => decrement(cafe.id)} aria-label={`Diminuir quantidade de ${cafe.nome}`}>-</button>
                  <span>{quantidades[cafe.id] ?? 0}</span>
                  <button onClick={() => increment(cafe.id)} aria-label={`Aumentar quantidade de ${cafe.nome}`}>+</button>
                </BotaoQuantidade>

                <CartButton onClick={() => handleAdicionar(cafe)} aria-label={`Adicionar ${cafe.nome} ao carrinho`}>
                  <ShoppingCart weight="fill" size={18} />
                </CartButton>
              </BuyLocal>
            </Card>
          ))}
        </Cards>
      </LojaContainer>
    </MainContainer>
  );
}
