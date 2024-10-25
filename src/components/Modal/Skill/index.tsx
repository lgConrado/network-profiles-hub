import js from "../../../assets/js.svg";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import scss from "../../../assets/scss.svg";
import git from "../../../assets/git.svg";
import gitlab from "../../../assets/gitlab.svg";
import github from "../../../assets/github-skill.svg";
import postgre from "../../../assets/postgre.svg";
import ts from "../../../assets/ts.svg";
import react from "../../../assets/react.svg";
import node from "../../../assets/node.svg";
import vite from "../../../assets/vite.svg";

const ModalSkill = ({ skill }: { skill: string }) => {
  const switchImg = (img: string) => {
    switch (img) {
      case "Javascript":
        return js;
      case "HTML":
        return html;
      case "CSS":
        return css;
      case "SCSS":
        return scss;
      case "Git":
        return git;
      case "Gitlab":
        return gitlab;
      case "Github":
        return github;
      case "Postgre":
        return postgre;
      case "TS":
        return ts;
      case "React":
        return react;
      case "Node":
        return node;
      case "Vite":
        return vite;
    }
  };

  return (
    <div className="skill">
      <div className="skill__content">
        <img src={switchImg(skill)} alt={`Cover ${skill}`} />
        <h3 className="heading--tertiary">{skill}</h3>
      </div>
    </div>
  );
};

export default ModalSkill;
