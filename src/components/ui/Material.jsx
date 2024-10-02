import React from "react";
import img1 from "../../assets/assets/material2.png"
import img2 from "../../assets/assets/material3.png"
import Headline from "../shared/Headline";
import Loadmorebtn from "../shared/Loadmorebtn";
const Material = () => {
  return (
    <div className="md:flex  gap-0 section-container items-center">
      <div className="md:w-[40%]">
        <h1 className="uppercase font-bannerfont text-primary font-base">
          Materials
        </h1>
        <Headline>we provide you the best experience</Headline>
        <p>
        Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
        </p>
        <Loadmorebtn>More Info</Loadmorebtn>
      </div>
      <div className="w-[60%] flex justify-center items-center ">
        <img src={img1} alt="" className="object-cover md:w-full  hidden lg:block"/>
        <img src={img2} alt="" className=" w-full"/>
      </div>
    </div>
  );
};

export default Material;
