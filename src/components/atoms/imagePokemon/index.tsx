"use client";
import Image from "next/image";

export function ImageComponent({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <Image
      src={image}
      alt={name}
      priority
      width={300}
      height={300}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
