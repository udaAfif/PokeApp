"use client";
import { ImageComponent } from "@/components/atoms/imagePokemon";
import { Progress } from "@/components/atoms/progresBar";
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

  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-500 p-5 rounded-lg border-blue-700 border-2">
        <div className="flex justify-center">
          <ImageComponent
            image={
              dataDetails?.sprites?.other["official-artwork"]?.front_default
            }
            name={details}
          />
        </div>
        <div className="flex-col flex items-center mt-2">
          <h3 className="font-semibold text-xl text-white">
            Weight: {dataDetails?.weight}
          </h3>
          {dataDetails?.types?.map((typeItem: any, i: any) => {
            return (
              <div className="flex items-center w-[500px] text-white" key={i}>
                <h3 className="p-3 font-bold">
                  Special Ability: {typeItem?.type?.name}
                </h3>
              </div>
            );
          })}
          {dataDetails?.stats?.map((item: any, i: any) => {
            const statValue = item?.base_stat;
            return (
              <div className="grid grid-cols-2 w-[500px] text-white" key={i}>
                <h3 className="p-3">
                  {item?.stat?.name}: {item?.base_stat}
                </h3>
                <Progress className="w-full m-auto" value={statValue} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
