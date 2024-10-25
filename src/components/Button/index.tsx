const Button = ({
  texto,
  tipo,
}: {
  texto: string;
  tipo: "primario" | "secundario";
}) => {
  return (
    <>
      {tipo === "primario" ? (
        <button className="button button--secondary">{texto}</button>
      ) : (
        <button className="button button--tertiary">{texto}</button>
      )}
    </>
  );
};

export default Button;
