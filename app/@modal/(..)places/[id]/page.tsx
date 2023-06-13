"use client";

import {
  PlaceDialog,
  PlaceDialogCancel,
  PlaceDialogContent,
  PlaceDialogDescription,
  PlaceDialogHeader,
} from "@/components/Dialog";

import { places } from "@/places";
import { X } from "lucide-react";
import Image from "next/image";

export default function Place({ params }: { params: { id: string } }) {
  const place = places.find((place) => place.id === params.id);

  const sliceLength = (desc: string) => {
    const len = desc?.length;
    return Math.floor(len / 3);
  };

  const formattedDescription = (description: string) => {
    const shortDesc = description?.trim()?.slice(0, sliceLength(description))
    const dots = shortDesc?.endsWith(".")? " . .": " . . .";
    return shortDesc + dots;
  };

  const reloadPage = () => {
    window.location.reload();
  }

  const redirectToHomePage = () => {
    window.location.href = "/";
  }

  if (!place) return <div>Place not found</div>;

  return (
    <div>
      <PlaceDialog open={true}>
        <PlaceDialogContent className="sm:px-10 sm:py-8">
          <PlaceDialogHeader>
            <PlaceDialogDescription className="flex items-center justify-center flex-col">
              <div>
                <div className="hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4 w-9/12 mx-auto overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    width={400}
                    height={400}
                    src={place.imageSrc}
                    alt={place.name}
                    className="object-cover w-full block mx-auto object-center group-hover:opacity-75"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="mt-6 text-3xl font-bold text-gray-700">
                    {place.name}
                  </h3>
                  <p className="mt-3 text-lg font-normal text-gray-600">
                    {formattedDescription(place?.description || "")}
                  </p>
                  <button
                    onClick={reloadPage}
                    className="bg-indigo-600 my-6 uppercase text-white p-3 rounded-xl hover:bg-indigo-800 block font-medium tracking-wide"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </PlaceDialogDescription>
          </PlaceDialogHeader>
          <PlaceDialogCancel
            onClick={redirectToHomePage}
            className="p-[0.625rem] rounded-full absolute right-6 top-4"
          >
            <X color="#000" size={20} />
          </PlaceDialogCancel>
        </PlaceDialogContent>
      </PlaceDialog>
    </div>
  );
}
