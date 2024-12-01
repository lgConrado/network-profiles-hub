import { useNavigate } from "react-router-dom";
import perfil from "../../assets/perfil.png";
import { useEffect, useState } from "react";
import getData from "../../api/restfull/get";
import useLocalStorage from "../../storage";

const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  const { GET_LocalStorage } = useLocalStorage();

  const [usuarioLogado, setUsuarioLogado] = useState<{
    id: number;
    nome: string;
    email: string;
  }>({ id: 0, nome: "", email: "" });

  const [perfilUsuarioLogado, setPerfilUsuarioLogado] = useState<{
    foto: string;
  }>({
    foto: "",
  });

  useEffect(() => {
    const ObterPerfil = async () => {
      const usuarioLogadoString = GET_LocalStorage("perfil");

      if (usuarioLogadoString) {
        const usuarioLogadoJSON = JSON.parse(usuarioLogadoString);
        const buscaPerfil = await getData("perfis", usuarioLogadoJSON.id);

        setPerfilUsuarioLogado({
          ...perfilUsuarioLogado,
          foto: buscaPerfil.Foto,
        });

        setUsuarioLogado({
          ...usuarioLogado,
          id: usuarioLogadoJSON.id,
          nome: usuarioLogadoJSON.nome,
          email: usuarioLogadoJSON.email,
        });
      }
    };

    ObterPerfil();
  }, []);

  return (
    <header className="header">
      <div className="header__perfil">
        <img
          src={
            perfilUsuarioLogado.foto === null || perfilUsuarioLogado.foto === ""
              ? perfil
              : perfilUsuarioLogado.foto
          }
          alt="Foto de perfil"
        />
        <h3>{usuarioLogado.nome}</h3>
      </div>
      <ul>
        <li
          data-actived={path === "/app/perfil"}
          onClick={() => navigate("/app/perfil")}
        >
          Meu perfil
        </li>
        <li
          data-actived={path === "/app/comunidade"}
          onClick={() => navigate("/app/comunidade")}
        >
          Comunidade
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
