import projectimg from "../../assets/modal-projects.svg";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="heading--secondary">Projetos</h2>
      <div className="projects__content">
        <div>
          <img src={projectimg} alt="" />
          <h3>Nome do projeto</h3>
          <ul>
            <li>Ferramenta utilizada 01;</li>
            <li>Ferramenta utilizada 02;</li>
            <li>Ferramenta utilizada 03;</li>
          </ul>
          <a href="">Saiba mais</a>
          <a href="">Editar projeto</a>
        </div>
        <div>
          <img src={projectimg} alt="" />
          <h3>Nome do projeto</h3>
          <ul>
            <li>Ferramenta utilizada 01;</li>
            <li>Ferramenta utilizada 02;</li>
            <li>Ferramenta utilizada 03;</li>
          </ul>
          <a href="">Saiba mais</a>
          <a href="">Editar projeto</a>
        </div>
        <div>
          <img src={projectimg} alt="" />
          <h3>Nome do projeto</h3>
          <ul>
            <li>Ferramenta utilizada 01;</li>
            <li>Ferramenta utilizada 02;</li>
            <li>Ferramenta utilizada 03;</li>
          </ul>
          <a href="">Saiba mais</a>
          <a href="">Editar projeto</a>
        </div>
        <div>
          <img src={projectimg} alt="" />
          <h3>Nome do projeto</h3>
          <ul>
            <li>Ferramenta utilizada 01;</li>
            <li>Ferramenta utilizada 02;</li>
            <li>Ferramenta utilizada 03;</li>
          </ul>
          <a href="">Saiba mais</a>
          <a href="">Editar projeto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
