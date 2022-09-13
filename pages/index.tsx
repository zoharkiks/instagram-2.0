import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Feed } from "../containers";
// import components
import { Modal, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    // FIXME Hide scrollbar
    <div className=" bg-gray-50 px-2 pb-10  overflow-y-visible scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal */}
      <Modal />
      
      {/* Website Sections */}
      <Navbar/>

      <Feed />
    </div>
  );
};

export default Home;
