import Connection from "../../connection";
import useLocalStorage from "../../../storage";

export default async function deleteData(object: string, id: number | string) {
  const { GET_LocalStorage } = useLocalStorage();

  const token = GET_LocalStorage("Token");
  try {
    if (token) {
      const connection = await fetch(`${Connection()}${object}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.replace(/"/g, "")}`,
        },
      });
      const data = await connection.json();
      return data;
    }
  } catch (error) {
    throw new Error(`Erro na requisição: ${error}`);
  }
}
