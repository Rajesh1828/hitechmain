import React from 'react';
import './NewArrivels.css'; 
import { assets } from '../../../assets/assets';

const NewArrivels = () => {
  const logos = [
    {
      id: 1,
      image: assets.ButtonFiles,
      title: "Planner",
    },
    {
      id: 2,
      image: assets.ClothBags,
      title: "Writing Tools",
    },
    {
      id: 3,
      image: assets.DesignPouch,
      title: "Paper",
    },
    {
      id: 4,
      image: assets.DocumentFiles,
      title: "Planner",
    },
    {
      id: 5,
      image: assets.Files,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.PocketExpandingFiles,
      title: "Paper",
    },
    {
      id: 7,
      image: assets.SatinClothZipperPoch,
      title: "Writing Tools",
    },
    {
      id: 8,
      image: assets.ReportFiles,
      title: "Paper",
    },
    {
      id: 9,
      image: assets.ZipFiles,
      title: "Writing Tools",
    },
    {
      id: 10,
      image: assets.OfficeFiles,
      title: "Paper",
    },


  ];

  return (
    <>
 <div className="h-[450px] ">
  <h1 className="text-xl  font-bold md:text-2xl text-center mt-5 text-black">
    Elevate Your Desk – New Arrivals in Style!
  </h1>

  <p className="text-center text-sm mt-3  text-gray-900">
    Step into a world of premium paper, elegant planners, and luxurious writing tools.
    Our latest collection blends sophistication with everyday practicality.
  </p>

  <div className="text-center pt-10 overflow-hidden">
    <div className="relative w-full">
      <div className="flex gap-10  animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`client-logo-${index}`}
            className=" w-30 object-cover    border-1 border-stone-200 shadow-amber-100 shadow-2xl rounded-full hover:border-pink-400"
          />
        ))}
      </div>
      <div className="flex gap-10 mt-3  animate-scroll-left">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`client-logo-${index}`}
            className=" w-30 object-cover    border-1 border-stone-200 shadow-amber-100 shadow-2xl rounded-full hover:border-pink-400"
          />
        ))}
      </div>
    </div>
  </div>
</div>



    

    </>
  );
};

export default NewArrivels;
