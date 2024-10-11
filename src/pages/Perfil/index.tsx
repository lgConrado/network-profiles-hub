import ModalPerfil from "../../components/Perfil";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Perfil = () => {
  return (
    <main className="pg--perfil">
      <ModalPerfil />
      <Skills />
      <Projects/>
    </main>
  );
};

export default Perfil;
