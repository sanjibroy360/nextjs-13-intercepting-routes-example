import { Manrope } from "next/font/google";
import { places } from "@/data/places";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });
export default function place({ params }: { params: { id: string } }) {
  const place = places.find((place) => place.id === params.id);

  if (!place) return <div>Oops! place not found</div>;

  return (
    <div
      className={`mx-auto max-w-7xl justify-center flex items-center flex-col px-6 py-12 lg:px-24`}
    >
      <div>
        <div className="aspect-h-1 aspect-w-1 hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4 w-full mx-auto overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            width={500}
            height={500}
            src={place.imageSrc}
            alt={place.name}
            className="object-cover w-full mx-auto object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className={`${manrope} mt-10 text-3xl font-bold text-gray-700`}>
            {place.name}
          </h3>
          <p
            className={`${manrope.className} my-5 text-lg font-medium text-gray-700 tracking-wide leading-normal`}
          >
            {place.description?.trim()}
          </p>
        </div>
      </div>
    </div>
  );
}
