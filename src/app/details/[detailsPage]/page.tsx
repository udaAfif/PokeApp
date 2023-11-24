import BackButton from "@/components/atoms/backButton";
import DetailsPokemonPages from "@/components/molecules/detailsPokemon";

export default function DetailsPage({
  params,
}: {
  params: { detailsPage: string };
}) {
  return (
    <div className="flex flex-col mx-auto py-4 justify-center">
      <div className="flex gap-5 justify-center text-center py-4">
        <BackButton />
        <h1 className="text-[#626F86] text-3xl">{params.detailsPage}</h1>
      </div>
      <DetailsPokemonPages details={params.detailsPage} />
    </div>
  );
}
