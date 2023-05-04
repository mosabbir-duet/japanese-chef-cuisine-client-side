import React, { useContext } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
const SingleChefInfo = ({ chef }) => {
  const { id, name, experience, image, likes } = chef;
  // console.log(chef.recipes);

  //   const handleToShowRecipe = () => {};
  const { user } = useContext(AuthContext);
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
              <h3 className="text-lg ">
                <strong className="text-warning">Total Recipe:</strong>{" "}
                {chef.recipes.length}
              </h3>
            </div>
          </div>
          <Link to={`/chef/${parseInt(id)}`}>
            <button className="btn btn-outline btn-warning hover:text-[#fff] text-center capitalize text-lg block mx-auto my-5">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChefInfo;
