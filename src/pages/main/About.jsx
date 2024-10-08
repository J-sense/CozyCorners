import React from "react";
import bannerimg from "../../assets/assets/about.jpg";
import Headline from "../../components/shared/Headline";
import Products from "../../components/ui/Products";
import WeDesign from "../../components/ui/about/WeDesign";
// import Headline from '../../components/shared/Headline'

const About = () => {
  return (
    <section className="">
      <div
        className="h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerimg})` }}
      >
        <Headline className="text-white">About Us</Headline>
      </div>
      <div className="section-container">
        <WeDesign />
       
      </div>
    </section>
  );
};

export default About;
