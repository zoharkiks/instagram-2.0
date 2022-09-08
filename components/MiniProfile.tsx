import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { images } from "../constants";
import { faker } from "@faker-js/faker";
import { signOut } from "next-auth/react";

const MiniProfile = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div className=" mt-10 flex  flex-col rounded-2xl bg-white py-10 px-10 shadow-xl">
      <div className="flex items-center space-x-6">
        <img
          className="h-16 w-16 rounded-full"
          src={images.profile.src}
          alt=""
        />
        <div>
          <h2 className="font-gilSemi">zoharkiks</h2>
          <span className=" font-manrope text-sm font-semibold  text-gray-500">
            React.JS Developer
          </span>
        </div>
        <Icon onClick={signOut} className="btn" icon="charm:sign-out" />
      </div>

<div className=" mt-10 flex items-center justify-between">
<p className=" font-manrope text-sm font-medium text-gray-400">
        Suggestions For You
      </p>
      <p className=" font-gilBold text-sm font-medium cursor-pointer  textGradient">
        See All
      </p>   
</div>
    

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex items-center mt-4 space-x-4    ">
          
          <img
            className=" h-12 w-12 cursor-pointer rounded-full border object-contain p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex flex-col space-y-1 ">
            <h2 className="font-gilSemi text-sm">{profile.username}</h2>
            <span className=" font-manrope text-xs font-semibold  text-gray-500">
              Works at {profile.company.name}
            </span>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default MiniProfile;
