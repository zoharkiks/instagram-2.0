import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setData(data);
  }, []);


    // Use Google Session
    const { data: session } = useSession();

  return (
    <div className="flex space-x-4 py-10 px-6 mt-10 bg-white overflow-x-scroll shadow-xl rounded-xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
      <Story
      img={session?.user?.image}
      username={session?.user?.name}
      />
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
