import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Topics from "../components/Topics";

const Home = () => {
  return <>
    <section className="home-bg w-full min-h-screen font-Jost">
      <Navbar />
      <Hero />
      <Topics />
    </section>
  </>;
};

export default Home;
