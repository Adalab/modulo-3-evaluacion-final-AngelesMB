import "../styles/core/variables.scss";
import "../styles/Header.scss";
import logo from "../images/hp-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Harry Potter logo"
        title="Harry Potter logo"
      />
      <h1 className="header__title">Buscador de personajes de Harry Potter</h1>
    </header>
  );
};
export default Header;
