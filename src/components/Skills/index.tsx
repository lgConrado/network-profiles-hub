import js from "../../assets/js.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import scss from "../../assets/scss.svg"
import git from "../../assets/git.svg"
import gitlab from "../../assets/gitlab.svg"
import github from "../../assets/github-skill.svg"
import postgre from "../../assets/postgre.svg"
import ts from "../../assets/ts.svg"
import react from "../../assets/react.svg"
import node from "../../assets/node.svg"
import vite from "../../assets/vite.svg"

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="heading--secondary">Skills</h2>
      <div className="skills__content">
        <div>
          <img src={js} alt="" />
          <h3 className="heading--tertiary">JavaScrip</h3>
        </div>
        <div>
          <img src={html} alt="" />
          <h3 className="heading--tertiary">HTML5</h3>
        </div>
        <div>
          <img src={css} alt="" />
          <h3 className="heading--tertiary">CSS3</h3>
        </div>
        <div>
          <img src={scss} alt="" />
          <h3 className="heading--tertiary">SASS</h3>
        </div>
        <div>
          <img src={git} alt="" />
          <h3 className="heading--tertiary">Git</h3>
        </div>
        <div>
          <img src={gitlab} alt="" />
          <h3 className="heading--tertiary">Gitlab</h3>
        </div>
        <div>
          <img src={github} alt="" />
          <h3 className="heading--tertiary">Github</h3>
        </div>
        <div>
          <img src={postgre} alt="" />
          <h3 className="heading--tertiary">PostgreSQL</h3>
        </div>
        <div>
          <img src={ts} alt="" />
          <h3 className="heading--tertiary">Typescript</h3>
        </div>
        <div>
          <img src={react} alt="" />
          <h3 className="heading--tertiary">React</h3>
        </div>
        <div>
          <img src={node} alt="" />
          <h3 className="heading--tertiary">Node</h3>
        </div>
        <div>
          <img src={vite} alt="" />
          <h3 className="heading--tertiary">Vite</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
