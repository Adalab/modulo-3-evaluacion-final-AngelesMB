const translateSpecies = (species) => {
  switch (species) {
    case "human":
      species = "Persona";
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

export default translateSpecies;
