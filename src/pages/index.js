import React from "react";
import Layout from "../components/layout/layout";
import Skills from "../components/sections/skills";
import Footer from "../components/sections/Footer";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import HeroSection from "../components/sections/HeroSection";

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <Services />
      <About />
      <Skills />
      <Work />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
