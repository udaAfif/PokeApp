"use client";
import { CardComponent } from "@/components/atoms/cardPokemon";
import SearchBarComponent from "@/components/atoms/searchBar";
import fetchPokemonList from "@/services/api/getList";
import { useEffect, useState } from "react";

export default function ListData() {
  const [searchPokemon, setsearchPokemon] = useState("");
  const [dataStore, setDataStore] = useState([]);
  useEffect(() => {
    const isFetch = async () => {
      const response = await fetchPokemonList();
      setDataStore(response);
    };
    isFetch();
  }, []);

  const filteredFunction = dataStore.filter((pokemon: any) =>
    pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center mx-auto text-center py-4">
      <h1 className="text-[#626F86] text-3xl">Pokemon App</h1>
      <div className="mb-4 mt-4 flex flex-row justify-center">
        <SearchBarComponent
          search={searchPokemon}
          setsearch={setsearchPokemon}
        />
      </div>
      <div className="grid gap-10 grid-cols-5 my-5 mx-auto">
        {filteredFunction.map((item: any, i: any) => {
          return (
            <div className="mb-4" key={i}>
              <CardComponent name={item?.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
