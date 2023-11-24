const API_PUBLIC = "https://pokeapi.co/api/v2/";
const fetchPokemonDetails = async (name: string) => {
  try {
    const response: any = await fetch(API_PUBLIC + "pokemon/" + name);
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert("Error fetching data");
  }
};

export default fetchPokemonDetails;
