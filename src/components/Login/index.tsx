import { useState } from "react";

const ModalLogin = () => {
  const [modulo, setModulo] = useState("login");

  const toggleModulo = () => {
    modulo === "login" ? setModulo("cadastrar") : setModulo("login");
  };
  return (
    <section className="section--modal-login">
      {modulo === "login" ? (
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
                <button className="button button--secondary" onClick={toggleModulo}>
                  REGISTRAR-SE
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : modulo === "cadastrar" ? (
        <div className="modal-cadastrar">
          <div className="modal-cadastrar__esquerda">
            <div className="modal-cadastrar__esquerda__content">
              <div className="modal-cadastrar__esquerda__header">
                <h2 className="heading--secondary">Bem-vindo de volta!</h2>
                <p className="text">
                  Acesse o sistema utilizando suas credenciais.
                </p>
              </div>
              <div>
                <button className="button button--secondary" onClick={toggleModulo}>ENTRAR</button>
              </div>
            </div>
          </div>
          <div className="modal-cadastrar__direita">
            <h1 className="heading--primary">Registrar-se</h1>
            <form className="modal-cadastrar__direita__form">
              <input
                type="text"
                placeholder="Nome completo"
                className="input"
              />
              <input type="email" placeholder="E-mail" className="input" />
              <input type="password" placeholder="Senha" className="input" />
              <input
                type="password"
                placeholder="Confirmar senha"
                className="input"
              />
            </form>
            <div>
              <button className="button button--primary">CRIAR CONTA</button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ModalLogin;
