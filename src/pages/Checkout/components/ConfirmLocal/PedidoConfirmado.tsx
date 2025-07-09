import { MapPin, Money, Timer } from "phosphor-react";
import Ilustracao from "../../../../assets/IlustraçãoViagem.svg";
import {
  ReadyContainer,
  ReadyContent,
  InfoContainer,
  ContainerEndereco,
  TimerContainer,
  TypePayContainer,
  CampoImg,
  IconSvgContainer,
} from "./styles";
import type { cycleFormData } from "../../../../types/types";

interface PedidoConfirmadoProps {
  dados: cycleFormData;
}

export function PedidoConfirmado({ dados }: PedidoConfirmadoProps) {
  return (
    <ReadyContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <ReadyContent>
        <InfoContainer>
          <ContainerEndereco>
            <IconSvgContainer variant="purple-100">
              <MapPin weight="fill" />
            </IconSvgContainer>
            <div>
              <p>
                Entrega em <strong>{dados?.rua}</strong>
              </p>
              <p>
                {dados?.bairro} - {dados?.cidade}, {dados?.uf}
              </p>
            </div>
          </ContainerEndereco>

          <TimerContainer>
            <IconSvgContainer variant="yellow-300">
              <Timer weight="fill"/>
            </IconSvgContainer >
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </TimerContainer>

          <TypePayContainer>
            <IconSvgContainer variant="yellow-500">
              <Money weight="fill" />
            </IconSvgContainer>
            <div>
              <p>Pagamento na entrega</p>
              <p className="text-gray-600">
                <strong>{dados?.pagamento}</strong>
              </p>
            </div>
          </TypePayContainer>
        </InfoContainer>

        <CampoImg>
          <img src={Ilustracao} />
        </CampoImg>
      </ReadyContent>
    </ReadyContainer>
  );
}
