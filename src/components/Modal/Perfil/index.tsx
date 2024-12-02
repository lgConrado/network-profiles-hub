import behance from "../../../assets/behance.svg";
import linkedin from "../../../assets/linkedin.svg";
import figma from "../../../assets/figma.svg";
import discord from "../../../assets/discord.svg";
import github from "../../../assets/github.svg";
import perfilimg from "../../../assets/perfil.png";
import getData from "../../../api/restfull/get";
import useLocalStorage from "../../../storage";
import { useEffect, useState } from "react";

const ModalPerfil = () => {
  const { GET_LocalStorage } = useLocalStorage();

  const [usuario, setUsuario] = useState<{
    id: number;
    nome: string;
    email: string;
  }>({ id: 0, nome: "", email: "" });

  const [perfil, setPerfil] = useState<{
    areaAtuacao: string;
    nome: string;
    biografia: string;
    linkedin: string;
    behance: string;
    figma: string;
    discord: string;
    github: string;
    foto: string;
  }>({
    areaAtuacao: "",
    nome: "",
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
      const path = window.location.pathname;

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);

        const perfilIdFromPath = Number(path.split("/").pop());

        const buscaPerfil = await getData(
          "perfis",
          isNaN(perfilIdFromPath) ? usuarioLogadoJSON.id : perfilIdFromPath
        );

        setPerfil({
          ...perfil,
          areaAtuacao: buscaPerfil["Area de atuação"],
          nome: buscaPerfil.Nome,
          behance: buscaPerfil.Behance,
          biografia: buscaPerfil.Biografia,
          discord: buscaPerfil.Discord,
          figma: buscaPerfil.Figma,
          foto: buscaPerfil.Foto,
          github: buscaPerfil.Github,
          linkedin: buscaPerfil.Linkedin,
        });

        setUsuario({
          ...usuario,
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
              perfil.foto === null || perfil.foto === ""
                ? perfilimg
                : perfil.foto
            }
            alt="Foto de perfil"
            className="modal-perfil__header__cover"
          />
          <h2 className="heading--secondary">{perfil.nome}</h2>
        </div>
        <h3 className="heading--tertiary">
          {perfil.areaAtuacao === null || perfil.areaAtuacao === ""
            ? "Seu cargo aqui"
            : perfil.areaAtuacao}
        </h3>
      </div>
      <p className="text">
        {perfil.biografia === null || perfil.biografia === ""
          ? "Este é um texto exemplo da biografia deste usuário! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis, deleniti at sed, maiores ad provident fugit esse labore illo aliquam itaque ratione, quibusdam harum animi nostrum inventore atque maxime?"
          : perfil.biografia}
      </p>
      <div className="modal-perfil__links">
        {perfil.linkedin !== null && perfil.linkedin !== "" ? (
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} />
          </a>
        ) : null}
        {perfil.behance !== null && perfil.behance !== "" ? (
          <a href={perfil.behance} target="_blank" rel="noopener noreferrer">
            <img src={behance} />
          </a>
        ) : null}
        {perfil.figma !== null && perfil.figma !== "" ? (
          <a href={perfil.figma} target="_blank" rel="noopener noreferrer">
            <img src={figma} />
          </a>
        ) : null}
        {perfil.discord !== null && perfil.discord !== "" ? (
          <a href={perfil.discord} target="_blank" rel="noopener noreferrer">
            <img src={discord} />
          </a>
        ) : null}
        {perfil.github !== null && perfil.github !== "" ? (
          <a href={perfil.github} target="_blank" rel="noopener noreferrer">
            <img src={github} />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ModalPerfil;
