import React from "react";

const Newletter = () => {
  return (
    <div className="container mx-auto bg-red-100 my-12 py-8">
      <div className="pb-4 ">
        <h2 className="text-5xl text-center font-semibold   ">
          Subscribe To Our <span className="text-[#ff0018]">Newletter</span>
        </h2>
        <p className="text-center py-2">
          Subscribe now and receive weekly newsletter with recipes, new courses,
          interesting <br /> posts, popular recipes and much more!
        </p>
      </div>
      <div>
        <div className="form-control w-1/2">
          <div className="relative left-1/2 ">
            <input
              type="text"
              placeholder="your mail"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
