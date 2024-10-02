import React from "react";
import Loadmorebtn from "../shared/Loadmorebtn";
import img from "../../assets/assets/expricences.png";
import Headline from "../shared/Headline";
const ExperienceSection = () => {
  return (
    <div className="section-container grid md:grid-cols-2 items-center justify-center gap-8">
      <img src={img} alt="" />
      <div>
        <h1 className="uppercase font-bannerfont text-primary font-base">
          experience
        </h1>
        <Headline>we provide you the best experience</Headline>
        <p>
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <Loadmorebtn> Load More</Loadmorebtn>
      </div>
    </div>
  );
};

export default ExperienceSection;
