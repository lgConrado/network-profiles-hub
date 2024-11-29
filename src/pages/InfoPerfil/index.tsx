import { useEffect, useState } from "react";
import Button from "../../components/Button";

const InfoPerfil = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [keyVersion, setKeyVersion] = useState(1);

  const [infoPerfil, setInfoPerfil] = useState<{
    fotoPerfil: string;
    linkedin: string;
    nome: string;
    behance: string;
    areaAtuacao: string;
    figma: string;
    discord: string;
    github: string;
    biografia: string;
    skills: string;
  }>({
    fotoPerfil: "",
    linkedin: "",
    nome: "",
    behance: "",
    areaAtuacao: "",
    figma: "",
    discord: "",
    github: "",
    biografia: "",
    skills: "",
  });

  useEffect(() => {
    setKeyVersion((prevKey) => prevKey + 1);

    const generateJSX = () => {
      return (
        <div
          key={keyVersion}
          className="pg--projeto__fieldset__input__tecnologias"
        >
          {tecnologias.map((tecnologia, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  const listaTemp = tecnologias.filter((item) => {
                    return item !== tecnologia;
                  });

                  setTecnologias([...listaTemp]);
                }}
              >
                {tecnologia}
              </button>
            );
          })}
        </div>
      );
    };

    const component = generateJSX();
    setElement(component);
  }, [tecnologias]);
  return (
    <section className="pg--projeto">
      <h1 className="heading--primary">Informações pessoais</h1>
      <div className="pg--projeto__fieldset">
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="fotoPerfil">Foto do perfil</label>
          <input
            type="text"
            id="fotoPerfil"
            value={infoPerfil.fotoPerfil}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, fotoPerfil: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            id="linkedin"
            value={infoPerfil.linkedin}
            onChange={(e) => {
              setInfoPerfil({ ...infoPerfil, linkedin: e.target.value });
            }}
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
          ></textarea>
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            value={tecnologia}
            onChange={(e) => setTecnologia(e.target.value)}
          />
          <span
            onClick={() => {
              setTecnologias([...tecnologias, tecnologia]);
              setTecnologia("");
            }}
          >
            +
          </span>
          {element}
        </div>
      </div>

      <div className="pg--projeto__buttons">
        <Button texto="Cancelar" tipo="terciario" />
        <Button texto="Salvar" tipo="primario" />
      </div>
    </section>
  );
};

export default InfoPerfil;
