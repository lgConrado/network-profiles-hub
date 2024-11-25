import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Default from "../pages/Default";
import Perfil from "../pages/Perfil";
import Comunidade from "../pages/Comunidade";
import Projeto from "../pages/Projeto";
import InfoPerfil from "../pages/InfoPerfil";
import useLogin from "../api/auth";

const Rotas = () => {
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { TokenValidation } = useLogin();
    return TokenValidation() ? children : <Navigate to="/" replace />;
  };
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Default />
          </ProtectedRoute>
        }
      >
        <Route path="perfil" element={<Perfil />}></Route>
        <Route path="comunidade" element={<Comunidade />}></Route>
        <Route path="projeto/*" element={<Projeto />}></Route>
        <Route path="info-perfil/*" element={<InfoPerfil />}></Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
