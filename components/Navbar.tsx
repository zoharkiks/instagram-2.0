import Image from "next/image";
import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className=" sticky top-0 z-50 flex max-w-6xl items-center justify-between rounded-b-2xl bg-white py-4 px-2 font-gilSemi shadow-xl md:py-2 md:px-6 xl:mx-auto   ">
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
        {session ? (
          <>
            <Icon
              className="h-6 w-6 cursor-pointer md:hidden"
              icon="heroicons-solid:menu"
            />
            <Icon className="navBtn" icon="uiw:home" />
            <div className="navBtn relative">
              <Icon className="navBtn" icon="ion:paper-plane-outline" />
              <div className="gradient absolute -top-2 -right-3 flex h-5 w-5 animate-pulse items-center justify-center rounded-full text-xs text-white">
                3
              </div>
            </div>
            <Icon className="navBtn" icon="carbon:settings" />
            <Icon className="navBtn" icon="akar-icons:heart" />
            <Icon className="navBtn !inline-block " icon="fa:plus-square-o" />

            <img
            onClick={signOut}
              className="h-10 cursor-pointer rounded-full"
              src={session.user.image}
              alt="profile"
            />
          </>
        ) : (
          <>
            <Icon className="navBtn inline-grid" icon="uiw:home" />

            <button
              onClick={signIn}
              className="gradient rounded-full p-2 font-gilBold text-xs md:text-sm text-white"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
