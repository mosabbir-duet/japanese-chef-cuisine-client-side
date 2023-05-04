import React from "react";
const Banner = () => {
  return (
    <div className="my-4">
      <div
        style={{
          backgroundImage: `url('/banner.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // objectFit: "cover",
          minHeight: "560px",
          height: "100%",
          width: "100%",
        }}
      >
        <h2 className="text-3xl sm:text-7xl font-bold leading-tight text-[#ffc000] absolute right-24 md: top-1/3 md:right-80  header-name">
          Japanese <br /> Dishes <br /> You Have <br /> To Try!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
