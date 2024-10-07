import behance from "../../assets/behance.svg";
import linkedin from "../../assets/linkedin.svg";
import figma from "../../assets/figma.svg";
import discord from "../../assets/discord.svg";
import github from "../../assets/github.svg";
import perfil from "../../assets/perfil.png";

const ModalPerfil = () => {
  return (
    <section className="section--modal-perfil">
      <div className="modal-perfil">
        <div className="modal-perfil__header">
          <div className="modal-perfil__header__content">
            <img
              src={perfil}
              alt="Foto de perfil"
              className="modal-perfil__header__cover"
            />
            <h2 className="heading--secondary">Luiz Gustavo</h2>
          </div>
          <h3 className="heading--tertiary">Desenvolvedor de Software</h3>
        </div>
        <p className="text">
          Sou Tecnólogo em Análise e Desenvolvimento de Sistemas pela Unipar,
          com 21 anos. Tenho experiência com Figma, Node.js, JavaScript, React e
          TypeScript, focando no aprimoramento contínuo dessas habilidades.
        </p>
        <div className="modal-perfil__links">
          <img src={linkedin} />
          <img src={behance} />
          <img src={figma} />
          <img src={discord} />
          <img src={github} />
        </div>
      </div>
    </section>
  );
};

export default ModalPerfil;
