import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Feed } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="py-2 md:py-0 px-2 bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
};

export default Home;
