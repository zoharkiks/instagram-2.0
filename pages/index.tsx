import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Feed } from "../containers";
// import components
import { Modal, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    // FIXME Hide scrollbar
    <div className=" h-screen overflow-y-scroll bg-gray-50 px-2 scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal */}
      <Modal />
      
      {/* Website Sections */}
      <Feed />
      <Footer />
    </div>
  );
};

export default Home;
