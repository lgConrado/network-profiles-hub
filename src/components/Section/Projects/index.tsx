import projectimg from "../../../assets/modal-projects.svg";
import IProject from "../../../interfaces/IProject";
import ModalProject from "../../Modal/Project";

const SectionProjects = () => {
  const list: IProject[] = [
    {
      img: projectimg,
      titulo: "Projeto 01",
      ferramentas: ["Ferramenta 01", "Ferramenta 02", "Ferramenta 03"],
      link: "",
    },
    {
      img: projectimg,
      titulo: "Projeto 02",
      ferramentas: ["Ferramenta 04", "Ferramenta 05", "Ferramenta 06"],
      link: "",
    },
  ];
  return (
    <section className="projects">
      <h4 className="heading--quaternary">Projetos</h4>
      <div className="projects__content">
        {list.map((projeto: IProject, index) => {
          return (
            <ModalProject
              ferramentas={projeto.ferramentas}
              img={projeto.img}
              link={projeto.link}
              titulo={projeto.titulo}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionProjects;
