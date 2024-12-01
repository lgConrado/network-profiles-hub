import useLocalStorage from "../../../storage";
import Connection from "../../connection";

export default async function postData(
  object: string,
  bodyData: any,
  authToken?: boolean
) {
  const { GET_LocalStorage } = useLocalStorage();

  try {
    const token = GET_LocalStorage("Token");

    if (token) {
      const response = await fetch(`${Connection()}${object}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token.replace(/"/g, "")}`,
        },
        body: JSON.stringify(bodyData),
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
    } else if (authToken === false) {
      const response = await fetch(`${Connection()}${object}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bodyData),
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
    }
  } catch (error) {
    throw new Error(`Erro na requisição: ${error}`);
  }
}
