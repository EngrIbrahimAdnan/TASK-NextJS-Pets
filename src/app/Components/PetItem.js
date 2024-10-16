"use client";

import { useState } from "react";

import Image from "next/image";

const btnStyle =
  "m-4 p-2 bg-palette-primary text-white rounded-sm font-primary font-semibold  hover:bg-palette-dark";

function PetItem({ pet, adopt, setAdopt }) {
  const [image, setImage] = useState(pet.image);

  let isImagechanged = false;
  function handleImageClicked() {
    if (isImagechanged === false) {
      isImagechanged = true;
      setImage(pet.image);
    } else {
      isImagechanged = false;
      setImage(pet.image2);
    }
  }

  function adoptHandler(event) {
    const userResponse = confirm("Do you want to proceed?");

    if (userResponse) {
      setAdopt([...adopt, pet.name]);
      console.log(adopt);
    }
  }

  return (
    <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
      <div className="h-72 border-b-2 border-palette-lighter relative">
        <Image
          onClick={() => handleImageClicked()}
          alt={pet.name}
          src={image}
          className="transform duration-500 ease-in-out hover:brightness-75"
          fill
          sizes="30vw"
        />
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
          {pet.name}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {pet.description}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className={btnStyle}>
            Pet
          </button>
          <button
            type="button"
            className={btnStyle}
            onClick={(event) => adoptHandler(event)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
