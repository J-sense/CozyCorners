import React from "react";
import Headline from "../../shared/Headline";
import img1 from "/aboutone.jpg";
import { GiCheckMark } from "react-icons/gi";


const WeDesign = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="space-y-6">
        <h1>
          <h1 className="uppercase font-bannerfont text-primary font-base">
            We design
          </h1>
          <Headline>World Class Furniture's For Ultimate Comfort</Headline>
          <p className="font-bannerfont my-5">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
          <img src={img1} alt="" className="rounded-md" />
        </h1>
      </div>
      <div>
        <img src={img1} alt="" className="rounded-md"/>
        <Headline>Crafting Quality Furniture</Headline>
        <p className="font-bannerfont">
          Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui
          pretium blandit. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Ut eleifend mattis ligula,
          porta finibus urna gravida at.
        </p>
        <ul className="my-6 space-y-6 text-black">
          <li className="flex gap-3 items-center">
            <GiCheckMark className="text-primary" />{" "}
            <span>At eleifend mattis ligula, porta finibus urna gvida at.</span>
          </li>
          <li className="flex gap-3 items-center">
            <GiCheckMark className="text-primary" />{" "}
            <span>Aenean vehicula sodales arcu non mattis.
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <GiCheckMark className="text-primary" />{" "}
            <span>Integer dapibus ac dui pretium blanss aptent.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeDesign;
