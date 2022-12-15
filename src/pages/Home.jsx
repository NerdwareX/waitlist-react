import React from "react";
import { About, Courses, Footer, Hero, Navbar, Service, Testimonials, Topics } from "../components/home";

const Home = () => {
  return <>
    <section className="home-bg w-full min-h-screen font-Jost">
      <Navbar />
      <Hero />
      <Topics />
      <Courses />
      <About />
      <Testimonials />
      <Service />
      <Footer />
    </section>
  </>;
};

export default Home;
