import { Inter } from "next/font/google";
import Link from "next/link";
import { places } from "@/places";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} mx-auto max-w-7xl flex items-center flex-col px-6 py-12 lg:px-24`}
    >
      <h1 className="text-4xl font-bold">Places To Visit In Kolkata</h1>
      <h2 className="py-2 font-medium">[ Next.js 13 Intercepting Routes Example ]</h2>
      <div className="grid grid-cols-1 mt-24 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {places.map((place) => (
          <Link key={place.id} href={`/places/${place.id}`} className="group">
            <div className=" hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4  rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7 overflow-hidden w-full h-52">
              <Image
                width={400}
                height={300}
                src={place.imageSrc}
                alt={place.name}
                className="object-cover object-center h-full w-full group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-7d00 font-medium tracking-wide">
              {place.name}
            </h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
