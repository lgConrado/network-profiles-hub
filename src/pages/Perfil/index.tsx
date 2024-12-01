import { useEffect, useState } from "react";
import Button from "../../components/Button";
import SectionPerfil from "../../components/Section/Perfil";
import SectionProjects from "../../components/Section/Projects";
import SectionSkills from "../../components/Section/Skills";
import useLocalStorage from "../../storage";
import getData from "../../api/restfull/get";

const Perfil = () => {
  const { GET_LocalStorage } = useLocalStorage();
  const usuarioLogadoString = GET_LocalStorage("perfil");
  const [isUserLogado, setIsUserLogado] = useState(true);
  const usuarioLogadoJSON = usuarioLogadoString
    ? JSON.parse(usuarioLogadoString)
    : null;

  useEffect(() => {
    const ObterPerfil = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");
      const path = window.location.pathname;

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const perfilIdFromPath = Number(path.split("/").pop());

        const buscaPerfil = await getData(
          "usuarios",
          isNaN(perfilIdFromPath) ? usuarioLogadoJSON.id : perfilIdFromPath
        );

        setIsUserLogado(buscaPerfil.id === usuarioLogadoJSON.id);
      }
    };

    ObterPerfil();
  }, []);

  return (
    <main className="pg--perfil">
      <SectionPerfil />
      <SectionSkills />
      <SectionProjects />
      <>
        {isUserLogado ? (
          <div className="pg--perfil__buttons">
            <a
              href={`info-perfil/${usuarioLogadoJSON.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button tipo="secundario" texto="Editar perfil" />
            </a>
            <a href="projeto" target="_blank" rel="noopener noreferrer">
              <Button tipo="terciario" texto="Adicionar projeto" />
            </a>
          </div>
        ) : null}
      </>
    </main>
  );
};

export default Perfil;
