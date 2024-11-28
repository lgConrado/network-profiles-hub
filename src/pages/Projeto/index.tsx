import { useEffect, useState } from "react";
import Button from "../../components/Button";

const Projeto = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [keyVersion, setKeyVersion] = useState(1);

  const [projeto, setProjeto] = useState<{
    nomeProjeto: string;
    fotoCapa: string;
    hospedagem: string;
    prototipo: string;
    design: string;
    aplicacao: string;
    descricaoProjeto: string;
    tecUtilizadas: string;
  }>({
    nomeProjeto: "",
    fotoCapa: "",
    hospedagem: "",
    prototipo: "",
    design: "",
    aplicacao: "",
    descricaoProjeto: "",
    tecUtilizadas: "",
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
      <h1 className="heading--primary">Informações do projeto</h1>
      <div className="pg--projeto__fieldset">
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="nomeProjeto">Nome do projeto</label>
          <input
            type="text"
            id="nomeProjeto"
            value={projeto.nomeProjeto}
            onChange={(e) => {
              setProjeto({ ...projeto, nomeProjeto: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="fotoCapa">Foto de capa</label>
          <input
            type="text"
            id="fotoCapa"
            value={projeto.fotoCapa}
            onChange={(e) => {
              setProjeto({ ...projeto, fotoCapa: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="hospedagem">Hospedagem</label>
          <input
            type="text"
            id="hospedagem"
            value={projeto.hospedagem}
            onChange={(e) => {
              setProjeto({ ...projeto, hospedagem: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="prototipo">Protótipo</label>
          <input
            type="text"
            id="prototipo"
            value={projeto.prototipo}
            onChange={(e) => {
              setProjeto({ ...projeto, prototipo: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="design">Design</label>
          <input
            type="text"
            id="design"
            value={projeto.design}
            onChange={(e) => {
              setProjeto({ ...projeto, design: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="aplicacao">Aplicação</label>
          <input
            type="text"
            id="aplicacao"
            value={projeto.aplicacao}
            onChange={(e) => {
              setProjeto({ ...projeto, aplicacao: e.target.value });
            }}
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="descricaoProjeto">Descrição do projeto</label>
          <textarea name="" id="descricaoProjeto"></textarea>
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="tecnologiasUtilizadas">Tecnologias utilizadas</label>
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

export default Projeto;
