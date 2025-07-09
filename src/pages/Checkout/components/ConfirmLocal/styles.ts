import styled from "styled-components";

export type IconVariant = 'yellow-300' | 'yellow-500' | 'gray-500' | 'purple-100';

interface IconContainerProps {
  variant: IconVariant;
}

const ICON_COLORS = {
  'purple-100': 'purple-100',
  'yellow-300' : 'yellow-300',
  'yellow-500': 'yellow-500',
} as const;


export const ReadyContainer = styled.section`

  width: 100%;
  height: auto;
  

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['secondary']};
  }
`;

export const ReadyContent = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  justify-content: space-between;
 
`
export const InfoContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['secondary']};
  border-radius: 0 1rem;
  width: 50%;
  
  
`

export const IconSvgContainer = styled.div<IconContainerProps>`
    display: flex;

    border-radius: 50%;
    padding: 0.8rem;

    color: white;
    background-color: ${(props) => props.theme[ICON_COLORS[props.variant]]};
  `

  export const ContainerEndereco = styled.div`
  display:flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`
export const TimerContainer = styled.div`
  display:flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const TypePayContainer = styled.div`
  display:flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const CampoImg = styled.div`
  img{
    width: 500px;
    height: auto;
  }
`