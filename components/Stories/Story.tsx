import React from "react";

const Story = ({ img, username }) => {
  return (
    <div className="space-y-2">
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full border border-red-500 object-contain p-[1.5px] transition duration-200 hover:scale-110"
        src={img}
        alt="avatar"
      />

      <p className="w-14 truncate text-center font-manrope text-xs font-medium text-gray-700">
        {username}
      </p>
    </div>
  );
};

export default Story;
