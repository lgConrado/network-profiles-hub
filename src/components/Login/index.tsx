const ModalLogin = () => {
  return (
    <section className="section--modal-login">
      <div className="modal-login">
        <div className="modal-login__esquerda">
          <h1 className="heading--primary">Login</h1>
          <form className="modal-login__esquerda__form">
            <input type="email" placeholder="E-mail" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Mostrar Senha</label>
            </div>
          </form>
          <div>
            <button className="button button--primary">ENTRAR</button>
          </div>
        </div>
        <div className="modal-login__direita">
          <div className="modal-login__direita__content">
            <div className="modal-login__direita__header">
              <h2 className="heading--secondary">Olá, usuário!</h2>
              <p className="text">
                Registre-se para utilizar todas as funcionalidades de nosso
                sistema.
              </p>
            </div>
            <div>
              <button className="button button--secondary">REGISTRAR-SE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalLogin;
