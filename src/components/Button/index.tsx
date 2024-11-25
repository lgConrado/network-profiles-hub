const Button = ({
  texto,
  tipo,
}: {
  texto: string;
  tipo: "primario" | "secundario" | "terciario";
}) => {
  return (
    <>
      {tipo === "primario" ? (
        <button className="button button--primary">{texto}</button>
      ) : tipo === "secundario" ? (
        <button className="button button--secondary">{texto}</button>
      ) : (
        <button className="button button--tertiary">{texto}</button>
      )}
    </>
  );
};

export default Button;
