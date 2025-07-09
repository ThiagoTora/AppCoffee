import styled from "styled-components";

export type IconVariant = 'yellow-300' | 'yellow-500' | 'gray-500' | 'purple-100';

interface IconContainerProps {
  variant: IconVariant;
}

const ICON_COLORS = {
  'yellow-300': 'yellow-300',
  'yellow-500': 'yellow-500',
  'gray-500': 'gray-500',
  'purple-100': 'purple-100',
} as const;

// Container da Descrição
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 7rem;



  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    img {
      max-width: 100%;
    }
  }
`;

export const Descricao = styled.section`
  max-width: 600px;
  
  h2 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  span {
    
    font-size: 1.4rem;
    color: ${(props) => props.theme['gray-500']};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3.1rem;
      text-align: center;
    }
    li {
      text-align: center;
      font-size: 0.9rem;
    }
  span {
    text-align: center;

  }
  }

  @media (max-width: 764px) {
    h2 {
      font-size: 3.1rem;
    }
    li {
      text-align: left;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
    h2 {
      font-size: 3.1rem;
    }
  }

  @media (max-width: 1200px) {
    text-align: left;
    h2 {
      font-size: 3rem;
    }
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: white;

  background-color: ${(props) => props.theme[ICON_COLORS[props.variant]]};
`;


//Container da Loja
export const LojaContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme["gray-500"]};
`;

//Containeir dos Cands
export const Cards = styled.div`
  
  font-size: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 764px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 2rem;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;
    justify-content: center;
  
  }

  
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  
  }

`;

export const Card = styled.div`
  margin-top: 2rem;
  border-radius: 0 25px;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  width: 15rem;
  min-height: 19rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;

  border: 2px solid ${(props) => props.theme['gray-190']};

  img {
    margin-top: -60px;
  }
`;



//Estilização dos cards 

export const ImgAndTagLocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.75rem;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
  font-weight: bold;
  border-radius: 100px;
  padding: 0.25rem 0.75rem;
  font-size: 0.65rem;
  text-transform: uppercase;
`;

//Estilização Do meio do card 

export const DescriptionCardLocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 1rem 0;
  gap: 0.5rem;
  flex: 1; 
`;

export const Tittle = styled.span`
  color: ${(props) => props.theme['gray-600']};

  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;

  margin-top: 0.5rem;

`;

export const DescricaoCoffee = styled.span`
  color: ${(props) => props.theme['gray-500']};
  text-align: center;
  margin-top: 0.5rem;

`;

//Estilização na Area de compra 

export const BuyLocal = styled.div`
  width: 100%;
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};

  &::before {
    content: "R$ ";
    font-size: 1rem;
  }

  strong {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const BotaoQuantidade = styled.div`
  background: ${(props) => props.theme["gray-150"]};
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme["purple-dark-300"]};
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 4px;
  }

  span {
    margin: 0 0.5rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme["purple-dark-300"]};
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme["purple-dark-300"]};
  }
`;
