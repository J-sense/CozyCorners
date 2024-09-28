import React from "react";

const Whychooseus = () => {
  const content = [
    {
      title: "Luxury facilities",
      heading:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      heading:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      title: "Many Choices",
      heading:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];
  return (
    <div className="section-container my-16">
      <div className="grid md:grid-cols-12 justify-around items-center md:space-y-0 space-y-8">
        <div className="col-span-4">
          <h1 className="text-3xl text-black font-bannerfont font-bold">
            Why Choosing Us
          </h1>
        </div>
        <div className="md:col-span-8 md:flex gap-10">
          {content.map((item, idx) => (
            <div className="bg-slate-100 md:bg-white md:rounded-none rounded-md md:p-0 p-5">
              <h1 className="text-black font-bold uppercase text-base font-navfont" >{item.title}</h1>
              <p className="tracking-tight text-gray-500 mt-3">{item.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
