import { useEffect, useState } from "react";
import ModalSkill from "../../Modal/Skill";
import useLocalStorage from "../../../storage";
import getData from "../../../api/restfull/get";

const SectionSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const { GET_LocalStorage } = useLocalStorage();

  useEffect(() => {
    const ObterSkills = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");
      const path = window.location.pathname;

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const perfilIdFromPath = Number(path.split("/").pop());

        const buscaPerfil = await getData(
          "perfis",
          isNaN(perfilIdFromPath) ? usuarioLogadoJSON.id : perfilIdFromPath
        );

        const newArray = buscaPerfil.Skills.split(",").map((skill: string) =>
          skill.trim()
        );
        setSkills(newArray);
      }
    };

    ObterSkills();
  }, []);

  return (
    <>
      {skills.length > 0 ? (
        <section className="skills">
          <h4 className="heading--quaternary">Skills</h4>
          <div className="skills__content">
            {skills.map((skill: string, index) => {
              return <ModalSkill key={index} skill={skill} />;
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SectionSkills;
