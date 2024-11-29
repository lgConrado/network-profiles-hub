import behance from "../../../assets/behance.svg";
import linkedin from "../../../assets/linkedin.svg";
import figma from "../../../assets/figma.svg";
import discord from "../../../assets/discord.svg";
import github from "../../../assets/github.svg";
import perfil from "../../../assets/perfil.png";
import getData from "../../../api/restfull/get";
import useLocalStorage from "../../../storage";
import { useEffect, useState } from "react";

const ModalPerfil = () => {
  const { GET_LocalStorage } = useLocalStorage();

  const [usuarioLogado, setUsuarioLogado] = useState<{
    id: number;
    nome: string;
    email: string;
  }>({ id: 0, nome: "", email: "" });

  const [perfilUsuarioLogado, setPerfilUsuarioLogado] = useState<{
    areaAtuacao: string;
    biografia: string;
    linkedin: string;
    behance: string;
    figma: string;
    discord: string;
    github: string;
    foto: string;
  }>({
    areaAtuacao: "",
    biografia: "",
    linkedin: "",
    behance: "",
    figma: "",
    discord: "",
    github: "",
    foto: "",
  });

  useEffect(() => {
    const ObterPerfil = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const buscaPerfil = await getData("perfis", usuarioLogadoJSON.id);

        setPerfilUsuarioLogado({
          ...perfilUsuarioLogado,
          areaAtuacao: buscaPerfil["Area de atuação"],
          behance: buscaPerfil.Behance,
          biografia: buscaPerfil.Biografia,
          discord: buscaPerfil.Discord,
          figma: buscaPerfil.Figma,
          foto: buscaPerfil.Foto,
          github: buscaPerfil.Github,
          linkedin: buscaPerfil.Linkedin,
        });

        setUsuarioLogado({
          ...usuarioLogado,
          id: usuarioLogadoJSON.id,
          nome: usuarioLogadoJSON.nome,
          email: usuarioLogadoJSON.email,
        });
      }
    };

    ObterPerfil();
  }, []);
  return (
    <div className="modal-perfil">
      <div className="modal-perfil__header">
        <div className="modal-perfil__header__content">
          <img
            src={
              perfilUsuarioLogado.foto === null ||
              perfilUsuarioLogado.foto === ""
                ? perfil
                : perfilUsuarioLogado.foto
            }
            alt="Foto de perfil"
            className="modal-perfil__header__cover"
          />
          <h2 className="heading--secondary">{usuarioLogado.nome}</h2>
        </div>
        <h3 className="heading--tertiary">
          {perfilUsuarioLogado.areaAtuacao === null ||
          perfilUsuarioLogado.areaAtuacao === ""
            ? "Seu cargo aqui"
            : perfilUsuarioLogado.areaAtuacao}
        </h3>
      </div>
      <p className="text">
        {perfilUsuarioLogado.biografia === null ||
        perfilUsuarioLogado.biografia === ""
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum porro ea est! Laborum consectetur eos aspernatur neque amet inventore ex culpa pariatur fugiat nam. Inventore vitae perspiciatis nisi distinctio."
          : perfilUsuarioLogado.biografia}
      </p>
      <div className="modal-perfil__links">
        <a
          href={perfilUsuarioLogado.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href={perfilUsuarioLogado.behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={behance} />
        </a>
        <a
          href={perfilUsuarioLogado.figma}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={figma} />
        </a>
        <a
          href={perfilUsuarioLogado.discord}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discord} />
        </a>
        <a
          href={perfilUsuarioLogado.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} />
        </a>
      </div>
    </div>
  );
};

export default ModalPerfil;
