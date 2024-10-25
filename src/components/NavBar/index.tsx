import { useNavigate } from "react-router-dom";
import perfil from "../../assets/perfil.png";

const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__perfil">
        <img src={perfil} alt="Foto de perfil" />
        <h3>lg.conrado</h3>
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
