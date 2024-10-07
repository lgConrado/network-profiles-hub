import perfil from "../../assets/perfil.svg";

const NavBar = () => {
  const path = window.location.pathname;

  return (
    <header className="header">
      <div className="header__perfil">
        <img src={perfil} alt="Foto de perfil" />
        <h3>lg.conrado</h3>
      </div>
      <ul>
        <li data-actived={path==="/app/perfil"}>Meu perfil</li>
        <li data-actived={path==="/app/comunidade"}>Comunidade</li>
      </ul>
    </header>
  );
};

export default NavBar;
