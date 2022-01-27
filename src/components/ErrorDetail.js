import "../styles/core/modal.scss";
import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const ErrorDetail = () => {
  return (
    <div className="modal">
      <article className="character__detail">
        <div>
          <span className="character__detail--text">
            Personaje no encontrado.
          </span>
        </div>
      </article>
      <div className="character__detail--back">
        <Link to="/">
          <i className="fas fa-arrow-left character__detail--icon"></i>
        </Link>
        <span className="character__detail--backText">Volver al listado</span>
      </div>
    </div>
  );
};

export default ErrorDetail;
