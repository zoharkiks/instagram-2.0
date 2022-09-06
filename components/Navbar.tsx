import Image from "next/image";
import React from "react";
import { images } from "../constants";

const Navbar = () => {
  return (
    <div className="flex">
      <div className=" relative h-16 w-16">
        <Image src={images.logoVert.src} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Navbar;
