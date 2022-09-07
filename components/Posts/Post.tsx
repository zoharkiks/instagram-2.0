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
        <Icon icon="bi:three-dots" />
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
          className="flex-1 border-none outline-none focus:ring-0 text-sm font-manrope font-medium  placeholder-gray-400  "
        />
        <button className="font-gilBold text-gray-400 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Post</button>
      </form>
    </div>
  );
};

export default Post;
