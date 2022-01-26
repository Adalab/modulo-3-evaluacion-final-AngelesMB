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
    <footer class="footer">
      {/* <Link to="/"> */}
      <i class="fas fa-arrow-up footer--icon" onClick={handleClick}></i>
      {/* </Link> */}
    </footer>
  );
};
export default Footer;
