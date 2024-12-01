import Button from "../../components/Button";
import SectionPerfil from "../../components/Section/Perfil";
import SectionProjects from "../../components/Section/Projects";
import SectionSkills from "../../components/Section/Skills";
import useLocalStorage from "../../storage";

const Perfil = () => {
  const { GET_LocalStorage } = useLocalStorage();
  const usuarioLogadoString = GET_LocalStorage("perfil");
  const usuarioLogadoJSON = usuarioLogadoString
    ? JSON.parse(usuarioLogadoString)
    : null;

  return (
    <main className="pg--perfil">
      <SectionPerfil />
      <SectionSkills />
      <SectionProjects />
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
    </main>
  );
};

export default Perfil;
