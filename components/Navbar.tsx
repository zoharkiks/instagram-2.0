import Image from "next/image";
import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className=" bg-gray- mx-2 flex max-w-7xl items-center justify-between rounded-xl py-4 px-2 font-gilSemi shadow-xl md:px-6 xl:mx-auto sticky top-0 z-50 bg-white  ">
      <div className=" relative h-14 w-14 md:hidden ">
        <Image src={images.logoVert.src} layout="fill" objectFit="contain" />
      </div>

      <div className="relative hidden h-24 w-40 md:inline-grid ">
        <Image src={images.logoHorz.src} layout="fill" objectFit="contain" />
      </div>

      <div className="max-w-xs">
        <div className="relative flex justify-center md:inline-block ">
          <div className="pointer-events-none absolute inset-y-0 flex items-center  pr-28 md:pl-3">
            <Icon className="h-4 w-4 text-gray-600" icon="ep:search" />
          </div>
          <input
            className="block w-[75%] rounded-xl   border-gray-100 bg-gray-200 py-2 pl-10 text-sm focus:border-black focus:ring-black md:w-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <Icon
          className="h-6 w-6 cursor-pointer md:hidden"
          icon="heroicons-solid:menu"
        />
        <Icon className="navBtn" icon="uiw:home" />
        <div className="relative navBtn">
        <Icon className="navBtn" icon="ion:paper-plane-outline" />
<div className="absolute flex -top-2 -right-3 items-center justify-center bg-gradient-to-r from-red-500 via-pink-500 to-violet-300 w-5 h-5 rounded-full animate-pulse text-white text-xs">
  3
</div>
        </div>
        <Icon className="navBtn" icon="carbon:settings" />
        <Icon className="navBtn" icon="akar-icons:heart" />
        <Icon className="navBtn !inline-block " icon="fa:plus-square-o" />

        <img
          className="h-10 cursor-pointer rounded-full"
          src={images.profile.src}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
