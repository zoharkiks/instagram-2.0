import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setData(data);
  }, []);

  return (
    <div className="flex space-x-4 p-10 mt-10 bg-white overflow-x-scroll shadow-xl rounded-xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
      {data.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
