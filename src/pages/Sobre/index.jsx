import { Section, Title } from "../../GlobalStyle";
import { SobreContainer, SobreImg, SobreText } from "./style";
import detail from "../../assets/sobre_detalhe.png";
export const Sobre = () => {
  return (
    <Section>
      <Title>Sobre</Title>
      <SobreContainer>
        <SobreText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse atque
          distinctio inventore laudantium possimus nulla autem eius deserunt
          vel, eos, iure optio ex. Ipsum similique eligendi commodi corporis
          odio laborum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Esse atque distinctio inventore laudantium possimus nulla autem
          eius deserunt vel, eos, iure optio ex. Ipsum similique eligendi
          commodi corporis odio laborum.
        </SobreText>
        <SobreImg src={detail} />
      </SobreContainer>
    </Section>
  );
};
