import perfil from "../../assets/perfil.png";

const Users = () => {
  return (
    <div className="container">
      <h3>Usuários encontrados: 02</h3>
      <section className="container__users">
        <div className="container__users__user">
          <img src={perfil} alt="" />
          <div className="container__users__user__description">
            <h3>Luiz Gustavo</h3>
            <h4>Desenvolvedor de software</h4>
          </div>
        </div>
        <div className="container__users__user">
          <img src={perfil} alt="" />
          <div className="container__users__user__description">
            <h3>Luiz Antônio</h3>
            <h4>Web design</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;
