"use client";
import { ImageComponent } from "@/components/atoms/imagePokemon";
import fetchPokemonDetails from "@/services/api/getDetails";
import { useEffect, useState } from "react";

export default function DetailsPokemonPages({ details }: { details: string }) {
  const [dataDetails, setDataDetails] = useState<any>("");
  useEffect(() => {
    const isFetch = async () => {
      const response = await fetchPokemonDetails(details);
      setDataDetails(response);
    };
    isFetch();
  }, []);

  console.log(dataDetails);
  return (
    <div className="flex flex-col items-center">
      <ImageComponent
        image={dataDetails?.sprites?.other["official-artwork"]?.front_default}
        name={details}
      />
      <div className="flex-col flex items-center mt-2">
        <h3 className="font-semibold text-xl">Weight: {dataDetails?.weight}</h3>
        {dataDetails?.types?.map((typeItem: any, i: any) => {
          return (
            <div className="flex items-center w-[500px]" key={i}>
              <h3 className="p-3">Special Ability: {typeItem?.type?.name}</h3>
            </div>
          );
        })}
        {dataDetails?.stats?.map((item: any, i: any) => {
          return (
            <div className="flex items-center w-[500px]" key={i}>
              <h3 className="p-3">
                {item?.stat?.name}: {item?.base_stat}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
