// import { useLoginContext } from "../../hooks/context/useLoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Connection from "../connection";
import Storage from "../../storage";

const useLogin = () => {
  const { ADD_LocalStorage, GET_LocalStorage, REMOVE_LocalStorage } = Storage();
  const navigate = useNavigate();

  const Login = async (data: { email: string; senha: string }) => {
    if (data.email !== "" && data.senha !== "") {
      try {
        const response = await fetch(`${Connection()}auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        if (response.ok) {
          const token = responseData.token;
          ADD_LocalStorage("Token", JSON.stringify(token));
          ADD_LocalStorage("perfil", responseData.userDb);
        }
      } catch (error: any) {
        alert(error);
      }
    }
  };
  const Logout = () => {
    REMOVE_LocalStorage("Token");
    REMOVE_LocalStorage("perfil");
    navigate("/");
  };

  const TokenValidation = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const verifyToken = async () => {
        try {
          const token = GET_LocalStorage("Token");

          if (!token) {
            navigate("/");
            return;
          }

          const response = await fetch(`${Connection()}token`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.replace(/"/g, "")}`,
            },
          });

          if (!response.ok) {
            throw Error;
          }

          const responseData = await response.json();
          ADD_LocalStorage("perfil", responseData.userDb);
        } catch (error) {
          alert(error);
          Logout();
          throw new Error(`Erro ao validar token: ${error}`);
        }
      };

      verifyToken();
    }, [navigate]);

    return null;
  };

  return {
    Login,
    Logout,
    TokenValidation,
  };
};

export default useLogin;
