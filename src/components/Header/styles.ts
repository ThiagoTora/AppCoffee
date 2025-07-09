import { styled} from "styled-components";
import { Coffee } from "phosphor-react";




export const HeaderContainer = styled.header`

  line-height: 1;

  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
  }
    
`

export const TittleArea = styled.div`
    display: flex;

    span{
      color: ${props => props.theme['gray-500']};
    }
`

export const CoffeeIcon = styled(Coffee)`
  color: ${props => props.theme['purple-dark-300']};
  font-size: 2rem; 
  margin-right: 0.5rem;
`;

export const LocalAndCart = styled.div`
    display: flex;
    gap: 10px;
`

export const Local = styled.div`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-dark-300']};

  border-radius: 10px;
  padding: 2.5px;
  height: 25px;
  

  display: flex;
  align-items: center;
  justify-content: center;

`

export const Cart = styled.div`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};

  border-radius: 10px;
  padding: 2.5px;
  height: 25px;
  width: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`