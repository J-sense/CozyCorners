import React from "react";
import img1 from "../../../assets/about/designer1.jpg";
import img2 from "../../../assets/about/designer2.jpg";
import img3 from "../../../assets/about/designer3.jpg";
import img4 from "../../../assets/about/designer4.jpg";
import Headline from "../../shared/Headline";
const Designers = () => {
  const designers = [
    {
      name: "Charles Carter",
      title: "CEO",
      image: img1,
    },
    {
      name: "Lina Hendrick",
      title: "Product Designer",
      image: img2,
    },
    {
      name: "Roger Marcus",
      title: "VP Sales",
      image: img3,
    },
    {
      name: "Mark Harrison",
      title: "Managing Director",
      image: img4,
    },
  ];

  return (
    <div className="text-center my-12 ">
      <p className="text-primary uppercase text-base">Comfort Crafters</p>
      <p>
        <Headline>Special Team</Headline>
      </p>
      <div className="grid md:grid-cols-4 gap-3 ">
        {designers.map((person, idx) => (
          <div className="" key={idx}>
            <img src={person.image} alt="" className="rounded-xl" />
           <div className="my-4">
           <h1 className="text-primary text-xl font-bannerfont ">{person.name}</h1>
           <p className="text-primary text-base font-navfont">{person.title}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designers;
