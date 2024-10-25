import projectimg from "../../../assets/modal-projects.svg";
import IProject from "../../../interfaces/IProject";
import ModalProject from "../../Modal/Project";
import perfil from "../../../assets/perfil.png";
import ModalUser from "../../Modal/User";
import IUser from "../../../interfaces/IUser";
import { useState } from "react";

const SectionSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const list: IProject[] = [
    {
      img: projectimg,
      titulo: "site 01",
      ferramentas: ["Ferramenta 01", "Ferramenta 02", "Ferramenta 03"],
      link: "",
    },
    {
      img: projectimg,
      titulo: "Projeto 02",
      ferramentas: ["Ferramenta 04", "Ferramenta 05", "Ferramenta 06"],
      link: "",
    },
  ];

  const usuarios: IUser[] = [
    {
      img: perfil,
      nome: "Luiz Gustavo",
      cargo: "Desenvolvedor de Software",
    },
    {
      img: perfil,
      nome: "Harrison Fabiano",
      cargo: "Web Design",
    },
  ];
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
            usuarios.filter((user: IUser) => {
              return String(user.nome.toLowerCase()).includes(
                String(inputSearch.toLowerCase())
              );
            }).length
          }
        </h3>
        <div className="search__container__content">
          {usuarios
            .filter((user: IUser) => {
              return String(user.nome.toLowerCase()).includes(
                String(inputSearch.toLowerCase())
              );
            })
            .map((usuario: IUser, index) => {
              return (
                <ModalUser
                  key={index}
                  cargo={usuario.cargo}
                  img={usuario.img}
                  nome={usuario.nome}
                />
              );
            })}
        </div>
      </div>
      <div className="search__container">
        <h3 className="heading--tertiary">
          Projetos encontrados:{" "}
          {
            list.filter((project: IProject) => {
              return String(project.titulo.toLowerCase()).includes(String(inputSearch.toLowerCase()));
            }).length
          }
        </h3>
        <div
          className="search__container__content"
          style={{ justifyContent: "start" }}
        >
          {list
            .filter((project: IProject) => {
                return String(project.titulo.toLowerCase()).includes(String(inputSearch.toLowerCase()));
            })
            .map((projeto: IProject) => {
              return (
                <ModalProject
                  ferramentas={projeto.ferramentas}
                  img={projeto.img}
                  link={projeto.link}
                  titulo={projeto.titulo}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SectionSearch;
