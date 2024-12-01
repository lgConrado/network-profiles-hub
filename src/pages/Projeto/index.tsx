import { useEffect, useState } from "react";
import Button from "../../components/Button";
import getData from "../../api/restfull/get";
import useLocalStorage from "../../storage";
import deleteData from "../../api/restfull/delete";
import postData from "../../api/restfull/post";
import updateData from "../../api/restfull/update";
import { useNavigate } from "react-router-dom";

const Projeto = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [element, setElement] = useState<JSX.Element | null>(null);
  const [keyVersion, setKeyVersion] = useState(1);
  const [projetoCadastrado, setProjetoCadastrado] = useState(true);
  const { GET_LocalStorage } = useLocalStorage();
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [usuarioLogado, setUsuarioLogado] = useState<{
    id: number;
    nome: string;
    email: string;
  }>({ id: 0, nome: "", email: "" });

  const initialProject = {
    id: 0,
    nome: "",
    titulo: "",
    fotoCapa: "",
    hospedagem: "",
    prototipo: "",
    design: "",
    aplicacao: "",
    descricao: "",
    tecnologias: [],
  };

  const [projeto, setProjeto] = useState<{
    id: number;
    nome: string;
    titulo: string;
    fotoCapa: string;
    hospedagem: string;
    prototipo: string;
    design: string;
    aplicacao: string;
    descricao: string;
    tecnologias: string[];
  }>(initialProject);

  useEffect(() => {
    const ObterProjeto = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);

        setUsuarioLogado({
          ...usuarioLogado,
          id: usuarioLogadoJSON.id,
          nome: usuarioLogadoJSON.nome,
          email: usuarioLogadoJSON.email,
        });

        const buscaProjeto = await getData("projetos");

        const projectIdFromPath = Number(path.split("/").pop());

        const projetoFiltrado = buscaProjeto.filter(
          (projeto: { id: number }) => {
            return projeto.id === projectIdFromPath;
          }
        );

        setProjetoCadastrado(projetoFiltrado.length > 0);

        if (projetoFiltrado.length > 0) {
          const newArray = projetoFiltrado[0].Tecnologias
            ? projetoFiltrado[0].Tecnologias.split(",").map(
                (tecnologia: string) => tecnologia.trim()
              )
            : [];

          setProjeto({
            ...projeto,
            id: projetoFiltrado[0].id,
            nome: projetoFiltrado[0].Nome,
            titulo: projetoFiltrado[0].Titulo,
            fotoCapa: projetoFiltrado[0]["Foto Capa"],
            hospedagem: projetoFiltrado[0].Hospedagem,
            prototipo: projetoFiltrado[0]["Protótipo"],
            design: projetoFiltrado[0].Design,
            aplicacao: projetoFiltrado[0]["Aplicação"],
            descricao: projetoFiltrado[0].Descrição,
            tecnologias: newArray,
          });
        }
      }
    };

    ObterProjeto();
  }, []);

  useEffect(() => {
    setKeyVersion((prevKey) => prevKey + 1);

    const generateJSX = () => {
      return (
        <div
          key={keyVersion}
          className="pg--projeto__fieldset__input__tecnologias"
        >
          {projeto.tecnologias.map((tecnologia, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (usuarioLogado.nome === projeto.nome) {
                    const listaTemp = projeto.tecnologias.filter((item) => {
                      return item !== tecnologia;
                    });
                    setProjeto({ ...projeto, tecnologias: [...listaTemp] });
                  }
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
  }, [projeto.tecnologias]);

  const ExcluirProjeto = () => {
    deleteData("projetos", projeto.id)
      .then(() => {
        alert("Projeto excluído");
        navigate("/app/perfil");
      })
      .catch(() => alert("Falha ao excluir projeto"));
  };

  const cadastraProjeto = () => {
    if (projeto.titulo !== "" && projeto.descricao !== "") {
      const object = {
        usuarioId: usuarioLogado.id,
        titulo: projeto.titulo,
        fotoCapa: projeto.fotoCapa,
        hospedagem: projeto.hospedagem,
        prototipo: projeto.prototipo,
        design: projeto.design,
        aplicacao: projeto.aplicacao,
        descricao: projeto.descricao,
        tecnologias: projeto.tecnologias.join(","),
      };

      postData("projetos", object)
        .then(() => {
          alert("Projeto cadastrado");
          setProjeto(initialProject);
        })
        .catch(() => alert("Falha ao cadastrar projeto"));
    } else {
      alert("Verifique se todos os campos obrigatórios foram preenchidos!");
    }
  };

  const atualizaProjeto = () => {
    if (projeto.titulo !== "" && projeto.descricao !== "") {
      const object = {
        usuarioId: usuarioLogado.id,
        titulo: projeto.titulo,
        fotoCapa: projeto.fotoCapa,
        hospedagem: projeto.hospedagem,
        prototipo: projeto.prototipo,
        design: projeto.design,
        aplicacao: projeto.aplicacao,
        descricao: projeto.descricao,
        tecnologias: projeto.tecnologias.join(","),
      };

      updateData("projetos", projeto.id, object)
        .then(() => {
          alert("Projeto atualizado");
          setProjeto(initialProject);
          window.location.reload();
        })
        .catch(() => alert("Falha ao cadastrar projeto"));
    } else {
      alert("Verifique se todos os campos obrigatórios foram preenchidos!");
    }
  };

  return (
    <section className="pg--projeto">
      <h1 className="heading--primary">Informações do projeto</h1>
      <div className="pg--projeto__fieldset">
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="nomeProjeto">Nome do projeto*</label>
          <input
            type="text"
            id="nomeProjeto"
            value={projeto.titulo}
            onChange={(e) => {
              setProjeto({ ...projeto, titulo: e.target.value });
            }}
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
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
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
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
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
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
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
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
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
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
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="descricaoProjeto">Descrição do projeto*</label>
          <textarea
            id="descricaoProjeto"
            value={projeto.descricao}
            onChange={(e) =>
              setProjeto({ ...projeto, descricao: e.target.value })
            }
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
          />
        </div>
        <div className="pg--projeto__fieldset__input">
          <label htmlFor="tecnologiasUtilizadas">Tecnologias utilizadas</label>
          <input
            type="text"
            id="tecnologiasUtilizadas"
            value={tecnologia}
            onChange={(e) => setTecnologia(e.target.value)}
            readOnly={
              projeto.nome !== "" && usuarioLogado.nome !== projeto.nome
            }
          />
          {projeto.nome === "" || usuarioLogado.nome === projeto.nome ? (
            <span
              onClick={() => {
                setProjeto({
                  ...projeto,
                  tecnologias: [...projeto.tecnologias, tecnologia],
                });
                setTecnologia("");
              }}
            >
              +
            </span>
          ) : null}
          {element}
        </div>
      </div>
      <>
        {projeto.nome === "" || usuarioLogado.nome === projeto.nome ? (
          <div className="pg--projeto__buttons">
            {projetoCadastrado ? (
              <Button
                texto="Excluir"
                tipo="terciario"
                onClick={() => ExcluirProjeto()}
              />
            ) : null}
            <Button
              texto="Salvar"
              tipo="primario"
              onClick={() =>
                projetoCadastrado ? atualizaProjeto() : cadastraProjeto()
              }
            />
          </div>
        ) : null}
      </>
    </section>
  );
};

export default Projeto;
