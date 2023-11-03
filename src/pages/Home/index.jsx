import {
  HomeBanner,
  HomePerfil,
  HomePerfilImg,
  HomePerfilName,
  HomePerfilRole,
} from "./style";
import perfil from "../../assets/perfil.jpg";

export const Home = () => {
  return (
    <HomeBanner>
      <HomePerfil>
        <HomePerfilImg src={perfil} />
        <HomePerfilName>Abelardo Júnior</HomePerfilName>
        <HomePerfilRole>Desenvolvedor Front-End</HomePerfilRole>
      </HomePerfil>
    </HomeBanner>
  );
};
