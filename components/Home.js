import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "./Portfolio";
import School from "./School";
import Experience from "./Experience";
import Hobbies from "./Hobbies";

function Home() {
  return (
    <div>
      <Head>
        <title>VS Personal Page</title>
        <meta name="description" content="Personal portfolio website" />
      </Head>
      <Header />
      <div>
        <Hero />
        <Portfolio />
        <School />
        <Experience />
        <Hobbies />
      </div>
    </div>
  );
}

export default Home;
