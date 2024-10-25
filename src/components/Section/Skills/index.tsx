import ModalSkill from "../../Modal/Skill";

const SectionSkills = () => {
  const list = ["Javascript", "HTML"];

  return (
    <section className="skills">
      <h4 className="heading--quaternary">Skills</h4>
      <div className="skills__content">
        {list.map((skill: string, index) => {
          return <ModalSkill key={index} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default SectionSkills;
