import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Default from "../pages/Default";
import Perfil from "../pages/Perfil";
import Comunidade from "../pages/Comunidade";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/app" element={<Default />}>
        <Route path="perfil" element={<Perfil />}></Route>
        <Route path="comunidade" element={<Comunidade />}></Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
