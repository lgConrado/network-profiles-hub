import projectimg from "../../../assets/modal-projects.svg";
import ModalProject from "../../Modal/Project";
import perfilimg from "../../../assets/perfil.png";
import ModalUser from "../../Modal/User";
import { useEffect, useState } from "react";
import useLocalStorage from "../../../storage";
import getData from "../../../api/restfull/get";

const SectionSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { GET_LocalStorage } = useLocalStorage();

  const [projetos, setProjetos] = useState<
    {
      id: number;
      usuarioId: number;
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

  const [perfis, setPerfis] = useState<
    {
      id: number;
      usuarioId: number;
      nome: string;
      areaAtuacao: string;
      biografia: string;
      linkedin: string;
      behance: string;
      figma: string;
      discord: string;
      github: string;
      foto: string;
      skills: string[];
    }[]
  >([]);

  useEffect(() => {
    const ObterProjetos = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const buscaProjetos = await getData("projetos");

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
            usuarioId: buscaProjetos[i]["usuario_id"],
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

        const filteredProjetos = projetosTemp.filter(
          (projeto: { usuarioId: number }) => {
            return projeto.usuarioId !== usuarioLogadoJSON.id;
          }
        );

        setProjetos(filteredProjetos);
      }
    };

    const ObterPerfil = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const buscaPerfis = await getData("perfis");

        const perfisTemp: typeof perfis = [];

        let i = 0;
        while (i < buscaPerfis.length) {
          const newArray = buscaPerfis[i].Skills
            ? buscaPerfis[i].Skills.split(",").map((tecnologia: string) =>
                tecnologia.trim()
              )
            : [];

          perfisTemp.push({
            id: buscaPerfis[i].id,
            usuarioId: buscaPerfis[i]["usuario_id"],
            areaAtuacao: buscaPerfis[i]["Área de atuação"],
            behance: buscaPerfis[i].Behance,
            biografia: buscaPerfis[i].Biografia,
            discord: buscaPerfis[i].Discord,
            figma: buscaPerfis[i].Figma,
            foto: buscaPerfis[i].Foto,
            github: buscaPerfis[i].Github,
            linkedin: buscaPerfis[i].Linkedin,
            nome: buscaPerfis[i].Nome,
            skills: newArray,
          });
          i++;
        }

        const filteredPerfis = perfisTemp.filter(
          (perfil: { usuarioId: number }) => {
            return perfil.usuarioId !== usuarioLogadoJSON.id;
          }
        );

        setPerfis(filteredPerfis);
      }
    };
    ObterPerfil();
    ObterProjetos();
  }, []); 

  return (
    <section className="search">
      <div className="search__input">
        <input
          className="input--search"
          type="search"
          placeholder="Pesquisar"
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />
      </div>
      <div className="search__container">
        <h3 className="heading--tertiary">
          Usuários encontrados:{" "}
          {
            perfis.filter(
              (perfil: {
                id: number;
                usuarioId: number;
                nome: string;
                areaAtuacao: string;
                biografia: string;
                linkedin: string;
                behance: string;
                figma: string;
                discord: string;
                github: string;
                foto: string;
                skills: string[];
              }) => {
                return String(perfil.nome.toLowerCase()).includes(
                  String(inputSearch.toLowerCase())
                );
              }
            ).length
          }
        </h3>
        <div className="search__container__content">
          {perfis
            .filter(
              (perfil: {
                id: number;
                usuarioId: number;
                nome: string;
                areaAtuacao: string;
                biografia: string;
                linkedin: string;
                behance: string;
                figma: string;
                discord: string;
                github: string;
                foto: string;
                skills: string[];
              }) => {
                return String(perfil.nome.toLowerCase()).includes(
                  String(inputSearch.toLowerCase())
                );
              }
            )
            .map(
              (
                perfil: {
                  id: number;
                  usuarioId: number;
                  nome: string;
                  areaAtuacao: string;
                  biografia: string;
                  linkedin: string;
                  behance: string;
                  figma: string;
                  discord: string;
                  github: string;
                  foto: string;
                  skills: string[];
                },
                index
              ) => {
                return (
                  <ModalUser
                    key={index}
                    cargo={perfil.areaAtuacao}
                    img={
                      perfil.foto === "" || perfil.foto === null
                        ? perfilimg
                        : perfil.foto
                    }
                    link={`perfil/${perfil.usuarioId}`}
                    nome={perfil.nome}
                  />
                );
              }
            )}
        </div>
      </div>
      <div className="search__container">
        <h3 className="heading--tertiary">
          Projetos encontrados:{" "}
          {
            projetos.filter(
              (projeto: {
                id: number;
                usuarioId: number;
                titulo: string;
                fotoCapa: string;
                hospedagem: string;
                prototipo: string;
                design: string;
                aplicacao: string;
                descricao: string;
                tecnologias: string[];
              }) => {
                return String(projeto.titulo.toLowerCase()).includes(
                  String(inputSearch.toLowerCase())
                );
              }
            ).length
          }
        </h3>
        <div
          className="search__container__content"
          style={{ justifyContent: "start" }}
        >
          {projetos
            .filter(
              (projeto: {
                id: number;
                usuarioId: number;
                titulo: string;
                fotoCapa: string;
                hospedagem: string;
                prototipo: string;
                design: string;
                aplicacao: string;
                descricao: string;
                tecnologias: string[];
              }) => {
                return String(projeto.titulo.toLowerCase()).includes(
                  String(inputSearch.toLowerCase())
                );
              }
            )
            .map(
              (projeto: {
                id: number;
                usuarioId: number;
                titulo: string;
                fotoCapa: string;
                hospedagem: string;
                prototipo: string;
                design: string;
                aplicacao: string;
                descricao: string;
                tecnologias: string[];
              }) => {
                return (
                  <ModalProject
                    ferramentas={projeto.tecnologias}
                    img={
                      projeto.fotoCapa === "" || projeto.fotoCapa === null
                        ? projectimg
                        : projeto.fotoCapa
                    }
                    link={`projeto/${projeto.id}`}
                    titulo={projeto.titulo}
                  />
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default SectionSearch;
