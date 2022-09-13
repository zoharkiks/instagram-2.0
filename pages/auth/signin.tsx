import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { images } from "../../constants";
import { Navbar } from "../../components";

const signin = ({ providers }) => {
  return (
    <div className=" bg-gray-50 ">
      <Navbar />
      <div
        className="
      grid h-screen  grid-cols-1
      place-items-center
      "
      >
        <div className="flex flex-col items-center justify-between space-y-4 rounded-xl bg-white p-24 shadow-2xl">
          <img className="h-32 w-32" src={images.logoVert.src} alt="logo" />
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="gradient rounded-lg p-4 font-gilBold text-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
