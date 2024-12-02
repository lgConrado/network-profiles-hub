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
      case "javascript":
        return js;
      case "html":
        return html;
      case "css":
        return css;
      case "scss":
        return scss;
      case "typescript":
        return ts;
      case "git":
        return git;
      case "gitlab":
        return gitlab;
      case "github":
        return github;
      case "postgre":
        return postgre;
      case "react":
        return react;
      case "node":
        return node;
      case "vite":
        return vite;
    }
  };

  return (
    <div className="skill">
      <div className="skill__content">
        <img src={switchImg(skill.toLowerCase())} alt={`Cover ${skill}`} />
        <h3 className="heading--tertiary">{skill}</h3>
      </div>
    </div>
  );
};

export default ModalSkill;
