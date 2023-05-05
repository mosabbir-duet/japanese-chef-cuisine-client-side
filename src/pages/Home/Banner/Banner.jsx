import React from "react";
import banner from "../../../../public/banner (2).webp";
const Banner = () => {
  return (
    <div className="my-4">
      <div className="relative">
        <img src={banner} alt="" style={{ height: "560px", width: "100%" }} />
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-[#ffc000] absolute right-24 bottom-1/3 md:right-32 lg:right-48 header-name ">
          Japanese <br /> Dishes <br /> You Have <br /> To Try!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
