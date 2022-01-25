import logo from "../images/hp-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Harry Potter logo" />
    </header>
  );
};
export default Header;
