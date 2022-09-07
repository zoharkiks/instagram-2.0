import React from "react";
import { Icon } from "@iconify/react";

const Post = ({ id, userName, avatar, mainImg, caption }) => {
  return (
    <div className="mt-10 rounded-2xl  bg-white pb-4 shadow-xl">
      <div className="flex items-center justify-between space-x-4 p-4 ">
        <img
          className="h-12 w-12 rounded-full"
          src={avatar.src}
          alt="profilePic"
        />
        <p className="flex-1 font-gilSemi">{userName}</p>
        <Icon className="btn h-6 w-6" icon="bi:three-dots" />
      </div>

      <img src={mainImg.src} className="w-full object-cover" alt="" />

      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Icon className="btn" icon="akar-icons:heart" />
          <Icon className="btn" icon="eva:message-circle-outline" />
          <Icon className="btn" icon="ion:paper-plane-outline" />
        </div>
        <Icon className="btn" icon="lucide:bookmark-minus" />
      </div>

      <p className="truncate px-4 font-manrope text-sm font-medium">
        <span className="mr-1 font-gilBold text-lg">{userName} </span>
        {caption}
      </p>

      <span className="cursor-pointer px-4 font-gilSemi text-sm ">
        Show More
      </span>

      <form className="flex items-center px-4 pt-4" action="">
        <Icon className="text-gray-400" icon="fluent:emoji-32-regular" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Comment"
          className="flex-1 border-none font-manrope text-sm font-medium placeholder-gray-400 outline-none  focus:ring-0  "
        />
        <button className="bg-gradient-to-r from-red-500 via-pink-600 to-violet-400 bg-clip-text font-gilBold text-transparent">
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
