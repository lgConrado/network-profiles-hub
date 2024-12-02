import { useEffect, useState } from "react";
import Button from "../../components/Button";
import useLocalStorage from "../../storage";
import getData from "../../api/restfull/get";
import updateData from "../../api/restfull/update";

const InfoPerfil = () => {
  const [skill, setSkill] = useState("");
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [keyVersion, setKeyVersion] = useState(1);
  const { GET_LocalStorage } = useLocalStorage();
  const path = window.location.pathname;

  const [usuarioLogado, setUsuarioLogado] = useState<{
    id: number;
    nome: string;
    email: string;
  }>({ id: 0, nome: "", email: "" });

  const [infoPerfil, setInfoPerfil] = useState<{
    id: number;
    nome: string;
    foto: string;
    linkedin: string;
    behance: string;
    areaAtuacao: string;
    figma: string;
    discord: string;
    github: string;
    biografia: string;
    skills: string[];
  }>({
    id: 0,
    nome: "",
    foto: "",
    linkedin: "",
    behance: "",
    areaAtuacao: "",
    figma: "",
    discord: "",
    github: "",
    biografia: "",
    skills: [],
  });

  useEffect(() => {
    const ObterInfo = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);

        setUsuarioLogado({
          ...usuarioLogado,
          id: usuarioLogadoJSON.id,
          nome: usuarioLogadoJSON.nome,
          email: usuarioLogadoJSON.email,
        });

        const buscaPerfil = await getData("perfis");

        const perfilIdFromPath = Number(path.split("/").pop());

        const perfilFiltrado = buscaPerfil.filter(
          (perfil: { usuario_id: number }) => {
            return perfil.usuario_id === perfilIdFromPath;
          }
        );

        const newArray = perfilFiltrado[0].Skills
          ? perfilFiltrado[0].Skills.split(",").map((tecnologia: string) =>
              tecnologia.trim()
            )
          : [];

        setInfoPerfil({
          ...InfoPerfil,
          id: perfilFiltrado[0].id,
          nome: perfilFiltrado[0].Nome,
          foto: perfilFiltrado[0].Foto === "" ? "" : perfilFiltrado[0].Foto,
          areaAtuacao:
            perfilFiltrado[0]["Área de atuação"] === ""
              ? ""
              : perfilFiltrado[0]["Área de atuação"],
          behance:
            perfilFiltrado[0].Behance === "" ? "" : perfilFiltrado[0].Behance,
          biografia:
            perfilFiltrado[0].Biografia === ""
              ? ""
              : perfilFiltrado[0].Biografia,
          discord:
            perfilFiltrado[0].Discord === "" ? "" : perfilFiltrado[0].Discord,
          figma: perfilFiltrado[0].Figma === "" ? "" : perfilFiltrado[0].Figma,
          github:
            perfilFiltrado[0].Github === "" ? "" : perfilFiltrado[0].Github,
          linkedin:
            perfilFiltrado[0].Linkedin === "" ? "" : perfilFiltrado[0].Linkedin,
          skills: newArray,
        });
      }
    };

    ObterInfo();
  }, []);

  useEffect(() => {
    setKeyVersion((prevKey) => prevKey + 1);

    const generateJSX = () => {
      return (
        <div
          key={keyVersion}
          className="pg--projeto__fieldset__input__tecnologias"
        >
          {infoPerfil.skills.map((skill, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  const listaTemp = infoPerfil.skills.filter((item) => {
                    return item !== skill;
                  });

                  setInfoPerfil({ ...infoPerfil, skills: [...listaTemp] });
                }}
              >
                {skill}
              </button>
            );
          })}
        </div>
      );
    };

    const component = generateJSX();
    setElement(component);
  }, [infoPerfil.skills]);

  const atualizaPerfil = () => {
    const object = {
      foto: infoPerfil.foto,
      areaAtuacao: infoPerfil.areaAtuacao,
      biografia: infoPerfil.biografia,
      linkedin: infoPerfil.linkedin,
      behance: infoPerfil.behance,
      figma: infoPerfil.figma,
      discord: infoPerfil.discord,
      github: infoPerfil.github,
      skills: infoPerfil.skills.join(","),
    };

    updateData("perfis", infoPerfil.id, object)
      .then(() => {
        alert("Perfil atualizado");
        window.location.reload();
      })
      .catch(() => alert("Falha ao cadastrar projeto"));
  };

  return (
    <section className="pg--projeto">
      <h1 className="heading--primary">Informações pessoais</h1>
      <div className="pg--projeto__fieldset">
        <>
          {usuarioLogado.nome === infoPerfil.nome ? (
            <div className="pg--projeto__fieldset__input">
              <label htmlFor="fotoPerfil">Foto do perfil</label>
              <input
                type="text"
                id="fotoPerfil"
                value={infoPerfil.foto}
                onChange={(e) => {
                  setInfoPerfil({ ...infoPerfil, foto: e.target.value });
                }}
              />
            </div>
          ) : null}
        </>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            id="linkedin"
            value={infoPerfil.linkedin}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, linkedin: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={infoPerfil.nome}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, nome: e.target.value });
            }}
            disabled
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="behance">Behance</label>
          <input
            type="text"
            id="behance"
            value={infoPerfil.behance}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, behance: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="areaAtuacao">Área de atuação</label>
          <input
            type="text"
            id="areaAtuacao"
            value={infoPerfil.areaAtuacao}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, areaAtuacao: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="figma">Figma</label>
          <input
            type="text"
            id="figma"
            value={infoPerfil.figma}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, figma: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="discord">Discord</label>
          <input
            type="text"
            id="discord"
            value={infoPerfil.discord}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, discord: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            id="github"
            value={infoPerfil.github}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, github: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="biografia">Biografia</label>
          <textarea
            name=""
            id="biografia"
            value={infoPerfil.biografia}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, biografia: e.target.value });
            }}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            readOnly={usuarioLogado.nome !== infoPerfil.nome}
          />
          {usuarioLogado.nome === infoPerfil.nome ? (
            <span
              onClick={() => {
                if (skill.trim() !== "") {
                  setInfoPerfil({
                    ...infoPerfil,
                    skills: [...infoPerfil.skills, skill],
                  });
                  setSkill("");
                }
              }}
            >
              +
            </span>
          ) : null}
          {element}
        </div>
      </div>
      <>
        {usuarioLogado.nome === infoPerfil.nome ? (
          <div className="pg--projeto__buttons">
            <Button
              texto="Salvar"
              tipo="primario"
              onClick={() => atualizaPerfil()}
            />
          </div>
        ) : null}
      </>
    </section>
  );
};

export default InfoPerfil;
