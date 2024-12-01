import IUser from "../../../interfaces/IUser";

const ModalUser = ({ img, nome, cargo, link }: IUser) => {
  return (
    <a href={link} target="_blank">
      <div className="user">
        <img src={img} alt={`Imagem de perfil do(a) ${nome}`} />
        <div className="user__description">
          <h3>{nome}</h3>
          <h4>{cargo}</h4>
        </div>
      </div>
    </a>
  );
};

export default ModalUser;
