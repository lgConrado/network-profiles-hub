import { useEffect, useState } from "react";
import Button from "../../components/Button";

const InfoPerfil = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [keyVersion, setKeyVersion] = useState(1);

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
          <label htmlFor="nomeProjeto">Foto do perfil</label>
          <input type="text" id="nomeProjeto" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="fotoCapa">Linkedin</label>
          <input type="text" id="fotoCapa" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="hospedagem">Nome</label>
          <input type="text" id="hospedagem" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="prototipo">Behance</label>
          <input type="text" id="prototipo" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="design">Área de atuação</label>
          <input type="text" id="design" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="aplicacao">Figma</label>
          <input type="text" id="aplicacao" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="aplicacao">Discord</label>
          <input type="text" id="aplicacao" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="aplicacao">Github</label>
          <input type="text" id="aplicacao" />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="descricaoProjeto">Biografia</label>
          <textarea name="" id="descricaoProjeto"></textarea>
        </div>
        <div className="pg--projeto__fieldset__input">
        <label htmlFor="descricaoProjeto">Skills</label>

        <input
          type="text"
          id="tecnologiasUtilizadas"
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
