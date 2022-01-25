const CharacterCard = ({ eachCharacter }) => {
  const translateSpecies = (species) => {
    switch (species) {
      case "human":
        species = "Humano";
        break;
      case "half-giant":
        species = "Medio gigante";
        break;
      case "werewolf":
        species = "Hombre lobo";
        break;
      case "ghost":
        species = "Fantasma";
        break;
      default:
        species = "No conocida";
    }
    return species;
  };
  const checkImageUrl = (image) => (image === "" ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter" : image);

  return (
    <article>
      <img src={checkImageUrl(eachCharacter.image)} alt={eachCharacter.name} />
      <h3>{eachCharacter.name}</h3>
      <p>{translateSpecies(eachCharacter.species)}</p>
    </article>
  );
};

export default CharacterCard;
