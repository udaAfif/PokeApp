const API_PUBLIC = "https://pokeapi.co/api/v2/";
const fetchPokemonList = async () => {
  try {
    const response: any = await fetch(
      API_PUBLIC + "pokemon?limit=200&offset=0"
    );
    const data = await response.json();
    return data.results;
  } catch (error: any) {
    alert("Error fetching data");
  }
};

export default fetchPokemonList;
