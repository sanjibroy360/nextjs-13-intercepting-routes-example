"use client";

import { useState } from "react";
import { Dialog } from "@reach/dialog";
import { VisuallyHidden } from "@reach/visually-hidden";
import { Manrope } from "next/font/google";
import { X } from "@phosphor-icons/react";

import Image from "next/image";
import { places } from "@/data/places";
import { useRouter } from "next/navigation";
import "@reach/dialog/styles.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function Place({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState<boolean>(true);
  const place = places.find((place) => place.id === params.id);

  const sliceLength = (desc: string) => {
    const len = desc?.length;
    return Math.max(Math.floor(len / 5), 200);
  };

  const formattedDescription = (description: string) => {
    const shortDesc = description?.trim()?.slice(0, sliceLength(description));
    const dots = shortDesc?.endsWith(".") ? " . ." : " . . .";
    return shortDesc + dots;
  };

  const close = () => {
    setShowDialog(false);
    redirectToHomePage();
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const redirectToHomePage = () => {
    router.back();
  };

  if (!place) return <div>Place not found</div>;

  return (
    <div>
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        className="relative lg:w-1/3 md:w-10/12 w-11/12 rounded"
      >
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span
            aria-hidden
            className="p-2 rounded-full absolute right-4 top-4 border-4 border-white hover:border-slate-200 hover:bg-gray-300"
          >
            <X color="#000" size={24} />
          </span>
        </button>

        <div className="hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4 w-9/12 mx-auto overflow-hidden rounded-lg bg-slate-200">
          <Image
            width={400}
            height={400}
            src={place.imageSrc}
            alt={place.name}
            className="object-cover w-full block mx-auto object-center group-hover:opacity-75"
          />
        </div>

        <div>
          <h3
            className={`${manrope.className} mt-6 text-3xl text-center font-bold text-gray-700`}
          >
            {place.name}
          </h3>
          <p
            className={`${manrope.className} mt-3 text-lg font-normal text-gray-600`}
          >
            {formattedDescription(place?.description || "")}
          </p>

          <button
            onClick={reloadPage}
            className="bg-indigo-600 my-6 uppercase text-white p-3 rounded-xl hover:bg-indigo-800 font-medium tracking-wide block mx-auto"
          >
            Read More
          </button>
        </div>
      </Dialog>
    </div>
  );
}
