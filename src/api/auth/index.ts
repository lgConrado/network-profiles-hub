import { useEffect } from "react";
import Connection from "../connection";
import Storage from "../../storage";
import useNavigateToLocation from "../../hooks/useNavigation";

const useLogin = () => {
  const { ADD_LocalStorage, GET_LocalStorage, REMOVE_LocalStorage } = Storage();
  const navigate = useNavigateToLocation();

  const Login = async (data: { email: string; senha: string }) => {
    if (data.email !== "" && data.senha !== "") {
      try {
        const response = await fetch(`${Connection()}login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
          const token = responseData.token;
          ADD_LocalStorage("Token", token);
          ADD_LocalStorage("perfil", responseData.userDb);
          window.location.assign("/app/perfil");
        } else {
          alert(responseData.error);
        }
      } catch (error: any) {
        alert(error);
      }
    }
  };
  const Logout = () => {
    REMOVE_LocalStorage("Token");
    REMOVE_LocalStorage("perfil");
  };

  const TokenValidation = () => {
    const verifyToken = async () => {
      try {
        const token = GET_LocalStorage("Token");

        if (!token) {
          return false;
        }

        const response = await fetch(`${Connection()}token`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.replace(/"/g, "")}`,
          },
        });

        if (!response.ok) {
          return false;
        }

        const responseData = await response.json();

        return responseData.ok ? true : false;
      } catch (error) {
        alert(error);
        return false;
      }
    };

    return verifyToken;
  };

  return {
    Login,
    Logout,
    TokenValidation,
  };
};

export default useLogin;
