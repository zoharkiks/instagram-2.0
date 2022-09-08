import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { images } from "../../constants";

const signin= ({ providers }) => {

  
  return (
    <div className="h-screen bg-gray-50 grid grid-cols-1  place-items-center">

<div className="flex flex-col justify-between items-center space-y-4 bg-white p-24 rounded-xl shadow-2xl">
<img className="h-32 w-32" src={images.logoVert.src} alt="logo" />
 {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="gradient font-gilBold text-white p-4 text-lg rounded-lg" onClick={() => signIn(provider.id, {callbackUrl:'/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
