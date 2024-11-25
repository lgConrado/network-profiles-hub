import Button from "../../components/Button";
import SectionPerfil from "../../components/Section/Perfil";
import SectionProjects from "../../components/Section/Projects";
import SectionSkills from "../../components/Section/Skills";

const Perfil = () => {
  return (
    <main className="pg--perfil">
      <SectionPerfil />
      <SectionSkills />
      <SectionProjects />
      <div className="pg--perfil__buttons">
        <Button tipo="secundario" texto="Editar perfil" />
        <Button tipo="terciario" texto="Adicionar projeto" />
      </div>
    </main>
  );
};

export default Perfil;
