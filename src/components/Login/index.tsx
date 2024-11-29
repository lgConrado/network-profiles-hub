import { useState } from "react";
import useLogin from "../../api/auth";
import Connection from "../../api/connection";

const ModalLogin = () => {
  const [modulo, setModulo] = useState("login");

  const [login, setLogin] = useState<{ email: string; senha: string }>({
    email: "",
    senha: "",
  });

  const [registrar, setRegistrar] = useState<{
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
  }>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [visibility, setVisibility] = useState(false);

  const matchPassword = () => {
    return registrar.senha === registrar.confirmarSenha;
  };

  const toggleModulo = () => {
    modulo === "login" ? setModulo("cadastrar") : setModulo("login");
  };

  const { Login } = useLogin();
  const Logar = () => {
    login.email !== "" && login.senha !== ""
      ? Login(login)
      : alert("Verificar se todos os campos foram preenchidos");
  };

  const CadastraUsuario = async () => {
    try {
      const response = await fetch(`${Connection()}usuarios`, {
        method: "POST",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify(registrar),
      });

      const responseData = response.ok
        ? async () => {
            await response.json();
            alert("Cadastro realizado!");
          }
        : Promise.reject(
            `Erro na requisição: ${response.status} - ${response.statusText}`
          );
      return responseData;
    } catch (error) {
      throw new Error("Erro na requisição");
    }
  };

  const Registrar = () => {
    registrar.nome !== "" &&
    registrar.email != "" &&
    registrar.senha !== "" &&
    registrar.confirmarSenha !== "" &&
    matchPassword() === true
      ? CadastraUsuario()
      : alert("Verificar se todos os campos foram preenchidos");
  };

  return (
    <section className="section--modal-login">
      {modulo === "login" ? (
        <div className="modal-login">
          <div className="modal-login__esquerda">
            <h1 className="heading--primary">Login</h1>
            <form className="modal-login__esquerda__form">
              <input
                type="email"
                placeholder="E-mail"
                className="input"
                value={login.email}
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
              />
              <input
                type={visibility ? "text" : "password"}
                placeholder="Senha"
                className="input"
                value={login.senha}
                onChange={(e) => {
                  setLogin({ ...login, senha: e.target.value });
                }}
              />
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={() => {
                    setVisibility(!visibility);
                  }}
                />
                <label htmlFor="checkbox">Mostrar Senha</label>
              </div>
            </form>
            <div>
              <button
                className="button button--primary"
                onClick={() => Logar()}
              >
                ENTRAR
              </button>
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
                <button
                  className="button button--secondary"
                  onClick={toggleModulo}
                >
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
                <button
                  className="button button--secondary"
                  onClick={toggleModulo}
                >
                  ENTRAR
                </button>
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
                value={registrar.nome}
                onChange={(e) => {
                  setRegistrar({ ...registrar, nome: e.target.value });
                }}
              />
              <input
                type="email"
                placeholder="E-mail"
                className="input"
                value={registrar.email}
                onChange={(e) => {
                  setRegistrar({ ...registrar, email: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Senha"
                className="input"
                value={registrar.senha}
                onChange={(e) => {
                  setRegistrar({ ...registrar, senha: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Confirmar senha"
                className="input"
                value={registrar.confirmarSenha}
                onChange={(e) => {
                  setRegistrar({
                    ...registrar,
                    confirmarSenha: e.target.value,
                  });
                }}
              />
            </form>
            <div>
              <button
                className="button button--primary"
                onClick={() => Registrar()}
              >
                CRIAR CONTA
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ModalLogin;
