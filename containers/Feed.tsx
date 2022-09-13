import { useSession } from "next-auth/react";
import React from "react";
import { MiniProfile, Posts, Stories } from "../components";

const Feed = () => {
  const { data: session } = useSession();

  return (
    <main className={`mx-auto  grid grid-cols-1 gap-x-10 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 
    ${!session && "!grid-cols-1 !max-w-3xl"}
    `}>


      {session ? (
        <>
          <section className="col-span-2 ">
            <Stories />
            <Posts />
          </section>
          <section className="hidden md:col-span-1 xl:inline-grid ">
            <div className="fixed">
              <MiniProfile />
            </div>
          </section>
        </>
      ) : (
        <section className="col-span-2 ">
          <Posts />
        </section>
      )}
    </main>
  );
};

export default Feed;
