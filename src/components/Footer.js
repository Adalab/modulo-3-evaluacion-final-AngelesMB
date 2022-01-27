import "../styles/Footer.scss"

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
      <i className="fas fa-arrow-up footer--icon" onClick={handleClick}></i>
    </footer>
  );
};
export default Footer;
