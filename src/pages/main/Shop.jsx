import React from "react";
import bannerimg from "../../assets/assets/banner.png";
import Headline from "../../components/shared/Headline";
import Products from "../../components/ui/Products";

const Shop = () => {
  return (
    <section className="">
      <div
        className="h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerimg})` }}
      >
       <Headline className="text-white">Shop Our Products</Headline>
      </div>
      <div>
        <Products headline="What's Your Choice"/>
        
      </div>
    </section>
  );
};

export default Shop;
