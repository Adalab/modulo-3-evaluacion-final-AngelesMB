import { Link } from "react-router-dom";

const ErrorDetail = () => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>
      <h2>Detalle del usuario:</h2>
      <p>No existen personajes.</p>
    </>
  );
};

export default ErrorDetail;
