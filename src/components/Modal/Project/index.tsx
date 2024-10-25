import IProject from "../../../interfaces/IProject";

const ModalProject = ({ img, titulo, ferramentas, link }: IProject) => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <img src={img} alt="Capa projeto" />
        <h3>{titulo}</h3>
        <ul>
          {ferramentas.map((ferramenta: string, index) => {
            return <li key={index}>{ferramenta}</li>;
          })}
        </ul>
        <a href={link}>Saiba mais</a>
        <a href="">Editar projeto</a>
      </div>
    </div>
  );
};

export default ModalProject;
