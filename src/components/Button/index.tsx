const Button = ({
  texto,
  tipo,
  onClick,
}: {
  texto: string;
  tipo: "primario" | "secundario" | "terciario";
  onClick?: () => void;
}) => {
  return (
    <>
      {tipo === "primario" ? (
        <button className="button button--primary" onClick={onClick}>
          {texto}
        </button>
      ) : tipo === "secundario" ? (
        <button className="button button--secondary" onClick={onClick}>
          {texto}
        </button>
      ) : (
        <button className="button button--tertiary" onClick={onClick}>
          {texto}
        </button>
      )}
    </>
  );
};

export default Button;
