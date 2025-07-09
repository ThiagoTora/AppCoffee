import styled from 'styled-components'


interface ButtonTypePaymentProps {
  isActive: boolean;
}


export const CheckoutContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;

   @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  
    svg{
      margin-top: -3.5rem;
    }
     
  }

  @media(max-width: 1024px) {
    text-align: left;
    flex-direction: column;
  }


`;

export const TittleLocal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-500']};
    margin-top: 5px;
    width: 1.6rem;
    height: auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-500']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-300']};
  }


  @media (max-width: 480px) {
  
    text-align: center;
  
    svg{
      margin-top: -3.5rem;
    }
     
  }
`;

export const InputLocal = styled.div`
  background-color: ${(props) => props.theme['gray-120']};
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;

   input {
      width: 100%;
      max-width: 90%;
      padding: 0.75rem;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme['gray-190']};
      background-color: ${(props) => props.theme['gray-130']};;
      
    }

   @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  
   @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;
export const FormContainer = styled.div`
  
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: 1rem;

  

`;

export const Input1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input:first-child {
    width: 100%;
    margin-bottom: 1rem;
  }

  input:last-child {
    width: 100%;
  }
    
`;

export const Input2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  input:first-child {
    width: 100%;

    @media (min-width: 600px) {
      width: 40%;
    }
  }

  input:last-child {
    flex: 1;
  }
`;

export const Input3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  input:nth-child(1) {
    width: 100%;

    @media (min-width: 600px) {
      width: 30%;
    }
  }

  input:nth-child(2) {
    flex: 1;
  }

  input:nth-child(3) {
    width: 100%;

    @media (min-width: 600px) {
      width: 10%;
    }
  }
`;

// PAY PLACE CONTAINER
export const PayPlace = styled.div`
  background-color: ${(props) => props.theme['gray-120']};
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  

   @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    
     
    input {
      width: 100%;
      max-width: 90%;
      padding: 0.75rem;
    }
  }

   @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    
   }
`;

export const TittlePayPlace = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.theme['purple-dark-300']};
    margin-top: 5px;
    width: 1.6rem;
    height: auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-500']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-300']};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonTypePayment = styled.button<ButtonTypePaymentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; // um pouco menor para harmonia
  cursor: pointer;

  min-width: 150px;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1; // garante alinhamento consistente
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-600']};

  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme['purple-50']}` : `${theme['gray-150']}`};

  border-radius: 6px;
  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme['purple-70']}` : '1px solid transparent'};

  svg {
    vertical-align: middle;
    margin: 0;
    color: ${({ isActive, theme }) =>
      isActive ? `${theme['purple-dark-300']}` : `${theme['gray-600']}`};
  }

  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? `${theme['purple-70']}` : `${theme['gray-190']}`};
    transition: background-color 0.3s;
  }
`;


// CART PLACE
export const CartContainer = styled.div`
  margin-top: 1rem;
  background-color: #f3f2f2;
  padding: 2rem;
  border-radius: 6px 44px;
  max-width: 400px;
  max-height: 280px;

  @media (min-width: 480px) {
    width: 75%; 
    margin: 0 auto;     
  }


   @media (min-width: 780px) {
    width: 100%;
    margin: 0 auto;   
  }

    @media (min-width: 1024px) {
    margin-top: 1rem;
    width: 100%;
     
  }
 
`;

export const ItemContainer = styled.div`
  display: flex;
  background-color: #f3f2f2;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  gap: 1rem;

  img {
    width: 64px;
    height: 64px;
    margin-right: 1rem;
  }

  strong {
    font-size: 1rem;
    color: #403937;
  }

  p {
    font-weight: bold;
    font-size: 1rem;
    
  }

  button {
    background-color: #e6e5e5;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.75rem;

    &:hover {
      background-color: #d7d5d5;
    }

  }

   @media (min-width: 480px) {
      gap: none;
     display: flex;
  
       img {
        width: 44px;
        height: 64px;
        margin-right: 0rem;
        margin-left: -20px;
      }
    }
`

export const ButtonCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  

  button {
    background-color: #e6e5e5;
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;

    &:hover {
      background-color: #d7d5d5;
    }
  }
`;

export const ButtonQuant = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e5e5;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["gray-190"]};
  

  span {
    font-size: 1rem;
    font-weight: 700;
    color: #272221;
  }

  button {
    background: none;
    font-size: 1rem;
    color: #8047f8;
    font-weight: bold;
    cursor: pointer;

  }
`;

export const ItemListContainer = styled.div`
  max-height: 100px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 4px;
  }
`;

export const InfoConfirm = styled.div`
  display: flex;
  flex-direction: column;

  button{
    margin-top: 1rem;
    width: 100%;
    padding: 0.7rem;
    border: 1px solid ${(props) => props.theme['yellow-500']};
    border-radius: 10px;
    background-color: ${(props) => props.theme['yellow-300']};
  }

`