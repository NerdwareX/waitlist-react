import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return <>
    <section className="home-bg w-full min-h-screen font-Jost">
      <Navbar />
      <Hero />
    </section>
  </>;
};

export default Home;
