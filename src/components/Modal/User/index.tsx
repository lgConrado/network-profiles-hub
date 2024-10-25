import IUser from "../../../interfaces/IUser";

const ModalUser = ({ img, nome, cargo }: IUser) => {
  return (
    <div className="user">
      <img src={img} alt={`Imagem de perfil do(a) ${nome}`} />
      <div className="user__description">
        <h3>{nome}</h3>
        <h4>{cargo}</h4>
      </div>
    </div>
  );
};

export default ModalUser;
