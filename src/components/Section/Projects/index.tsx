import { useEffect, useState } from "react";
import projectimg from "../../../assets/modal-projects.svg";
import ModalProject from "../../Modal/Project";
import useLocalStorage from "../../../storage";
import getData from "../../../api/restfull/get";

const SectionProjects = () => {
  const [projetos, setProjetos] = useState<
    {
      id: number;
      titulo: string;
      fotoCapa: string;
      hospedagem: string;
      prototipo: string;
      design: string;
      aplicacao: string;
      descricao: string;
      tecnologias: string[];
    }[]
  >([]);
  const { GET_LocalStorage } = useLocalStorage();

  useEffect(() => {
    const ObterProjetos = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const buscaProjetos = await getData("projetos", usuarioLogadoJSON.id);

        const projetosTemp: typeof projetos = [];

        let i = 0;
        while (i < buscaProjetos.length) {
          const newArray = buscaProjetos[i].Tecnologias
            ? buscaProjetos[i].Tecnologias.split(",").map(
                (tecnologia: string) => tecnologia.trim()
              )
            : [];

          projetosTemp.push({
            id: buscaProjetos[i].id,
            titulo: buscaProjetos[i].Titulo,
            fotoCapa: buscaProjetos[i]["Foto Capa"],
            hospedagem: buscaProjetos[i].Hospedagem,
            prototipo: buscaProjetos[i]["Protótipo"],
            design: buscaProjetos[i].Design,
            aplicacao: buscaProjetos[i]["Aplicação"],
            descricao: buscaProjetos[i].Descrição,
            tecnologias: newArray,
          });
          i++;
        }

        setProjetos(projetosTemp);
      }
    };

    ObterProjetos();
  }, []);

  return (
    <>
      {projetos.length > 0 ? (
        <section className="projects">
          <h4 className="heading--quaternary">Projetos</h4>
          <div className="projects__content">
            {projetos.map(
              (
                projeto: {
                  id: number;
                  titulo: string;
                  fotoCapa: string;
                  hospedagem: string;
                  prototipo: string;
                  design: string;
                  aplicacao: string;
                  descricao: string;
                  tecnologias: string[];
                },
                index
              ) => {
                return (
                  <ModalProject
                    ferramentas={projeto.tecnologias}
                    img={
                      projeto.fotoCapa === null || projeto.fotoCapa === ""
                        ? projectimg
                        : projeto.fotoCapa
                    }
                    link={`projeto/${projeto.id}`}
                    titulo={projeto.titulo}
                    key={index}
                  />
                );
              }
            )}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SectionProjects;
