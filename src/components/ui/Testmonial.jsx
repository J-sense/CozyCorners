import React, { useContext } from "react";
// import Loadmorebtn from "../shared/Loadmorebtn";
import Headline from "../shared/Headline";
import imgae1 from "../../assets/assets/reviewer1.png";
import imgae2 from "../../assets/assets/reviewer2.png";
import imgae3 from "../../assets/assets/reviewer3.png";
import { ThemeContext } from "../shared/Context/Themecontextprovider";

const Testmonial = () => {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className={`section-container ${isDarkMode ?'bg-gray-900' :'bg-white text-black'}`}>
      <div className="text-center mb-12">
        <h1 className="uppercase font-bannerfont text-primary font-base">
          Testmonial
        </h1>
        <Headline>Our Client Reviews</Headline>
      </div>
      <div className="md:flex justify-center item-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {testimonials.map((item, idx) => (
            <div key={idx} className={`p-4  shadow-lg rounded-lg ${isDarkMode ?"bg-zinc-900 text-white":" text-black"}`}>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 w-14 h-14 rounded-full object-contain"
              />
              <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
              <p className="text-gray-600">{item.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "This service is amazing! The team was very helpful and exceeded my expectations.",
    image: imgae1,
    rating: 5,
  },
  {
    name: "Jane Smith",
    testimonial:
      "Great experience overall. The process was smooth, and the quality is top-notch.",
    image: imgae2,
    rating: 4,
  },
  {
    name: "Michael Lee",
    testimonial:
      "Good service but there's room for improvement. Would recommend.",
    image: imgae3,
    rating: 3,
  },
];
