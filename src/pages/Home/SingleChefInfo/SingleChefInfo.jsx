import React from "react";
import { FaThumbsUp } from "react-icons/fa";
const SingleChefInfo = ({ chef }) => {
  const { id, name, experience, image, likes } = chef;
  console.log(chef.recipes.length);
  return (
    <div className="mb-12">
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img src={image} alt="Shoes" className="h-80 w-full" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title text-xl text-[#ff0018]">{name}</h2>
            </div>
            <div className="flex items-center justify-center">
              <FaThumbsUp className="inline-block h-4 w-4 text-cyan-500 mr-2"></FaThumbsUp>{" "}
              <span>{likes}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg ">
              <strong className="text-success">Experience:</strong> {experience}{" "}
              years
            </h3>
            <div className="">
              <button className="btn btn-outline btn-warning hover:text-[#fff]">
                View Recipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefInfo;
