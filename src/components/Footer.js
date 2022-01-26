// import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    scrollToTop();
  };
  return (
    <footer className="footer">
      {/* <Link to="/"> */}
      <i className="fas fa-arrow-up footer--icon" onClick={handleClick}></i>
      {/* </Link> */}
    </footer>
  );
};
export default Footer;
