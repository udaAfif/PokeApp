import { useRouter } from "next/navigation";

interface CardProps {
  name: string;
}

export function CardComponent({ name }: CardProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/details/${name}`);
      }}
      className="rounded-lg border p-5 w-full bg-blue-500 hover:bg-blue-700 text-white"
    >
      <h2 className={`text-2xl font-semibold`}>{name}</h2>
    </button>
  );
}
