import Button from "../../components/Button";
import ModalPerfil from "../../components/Perfil";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Perfil = () => {
  return (
    <main className="pg--perfil">
      <ModalPerfil />
      <Skills />
      <Projects/>
      <Button/>
    </main>
  );
};

export default Perfil;
