import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import slider1 from "/banner1.jpg"
import slider2 from "/slider2.jpg"
import slider3 from "/slider3.jpg"

const Hero = () => {
  const content = [
    {
      title: "Discover Furniture's For Living",
      heading:
        "Discover a range of premium, stylish furniture that brings sophistication to every room. From contemporary living spaces to cozy bedrooms, our expertly crafted pieces are designed to complement your unique taste and elevate your home’s aesthetic",
      tagline: "smart solution",
      background: slider2, // Add background for each slide
    },
    {
      title: "Embrace The Beauty Of Furniture",
      heading:
        "Reimagine your living spaces with our carefully curated collection of classic and timeless furniture. Each piece combines quality craftsmanship with enduring design, ensuring your home feels warm, inviting, and stylish for years to come.",
      tagline: "smart solution",
      background: slider1, // Add a different background for each slide
    },
    {
      title: "Enjoy With Style & Comfort",
      heading:
        "Experience the perfect blend of comfort and style with our exclusive range of furniture. Whether you're furnishing a new home or updating your space, our diverse collection offers something for every room, delivering both elegance and functionality",
      tagline: "create memories",
      background: slider3, // Another background for the last slide
    },
  ];

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${item.background})`, // Use the background from each item
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
              }}
              className="h-screen w-full text-white relative flex items-center justify-center"
            >
              <div className="text-center space-y-5 sm:space-y-6 md:space-y-7">
                <p className="text-yellow-500 uppercase font-bannerfont text-xs sm:text-sm">
                  {item.tagline}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl mb-4 font-bannerfont">
                  {item.title}
                </h1>
                <p className="text-sm md:text-lg max-w-2xl mx-auto tracking-tight space-y-1">
                  {item.heading}
                </p>

                {/* Updated Button with Centered Icon and Border */}
                <button
                  className="relative z-10 flex justify-center items-center gap-2 mx-auto overflow-hidden rounded-full bg-[#DD7210] text-gray-50 shadow-xl px-8 py-2 group transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100"
                  type="submit"
                >
                  Shop Now
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-50 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
                    >
                      <path
                        className="fill-gray-800 group-hover:fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -mb-2 h-3/4 bg-gradient-to-t from-zinc-600 via-transparent to-transparent blur-sm">

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
