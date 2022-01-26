const Button = ({ resetFilters }) => {
  const handleButtonClick = (ev) => {
    resetFilters();
  };
  return (
    <button className="button" onClick={handleButtonClick}>
      Limpiar campos
    </button>
  );
};
export default Button;
