import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Hero } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="py-2 md:py-0">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
