import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ShowRecipe = () => {
  const { id } = useParams();
  const [chefInfo, setChefInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://japanese-chef-cuisine-server-side-mosabbir-duet.vercel.app/chefInformation/${id}`
    )
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, {});

  const { name, experience, image, likes, description } = chefInfo;
  const recipe = chefInfo?.recipes;
  console.log(recipe);
  // console.log(recipe.length);
  return (
    <div className="container mx-auto px-4 my-4">
      <div className=" grid grid-cols-1 lg:grid-cols-2 card justify-center items-center">
        <div>
          <figure>
            <img src={image} alt="chef" className="rounded-xl w-full " />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title text-center block text-xl md:text-5xl text-[#ff0018]">
            {name}
          </h2>
          <p className="text-lg my-2">
            <strong>About Chef:</strong> {description}
          </p>
          <div className="flex justify-between items-center my-6">
            <h3 className="text-lg ">
              <strong className="text-success">Experience:</strong> {experience}{" "}
              years
            </h3>
            <div className="">
              <h3 className="text-lg ">
                <strong className="text-warning">Total Recipe: </strong> 3
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <FaThumbsUp className="inline-block h-6 w-6 text-cyan-500 mr-2"></FaThumbsUp>{" "}
              <span className="text-xl">{likes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-5xl text-center font-semibold  pb-4 border-b-2 ">
          Information about <span className="text-[#ffc000]">Recipe</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 my-8">
          {chefInfo?.recipes?.map((recipe) => {
            return (
              <div className="border border-spacing-2 rounded-xl p-8">
                <div className="flex justify-between ">
                  <p className="text-md">
                    <strong className="text-lg">Recipe Name: </strong>
                    {recipe.name}
                  </p>
                  <h1 className="text-md">
                    <strong className="text-lg">Rating: </strong>
                    {recipe.rating}
                  </h1>
                </div>
                <div>
                  <strong className="text-2xl text-[#ff0018] border-b-2 border-b-red-500 inline-block pb-2">
                    Ingredient:
                  </strong>
                  <ol>
                    {recipe?.ingredients.map((ingredient) => {
                      return (
                        <li className="text-md text-[#ffc000] ">
                          {ingredient}
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div>
                  <strong className="text-2xl text-[#ffc001] border-b-2 border-b-red-500 inline-block pb-2">
                    Cooking Method:
                  </strong>
                  <ol>
                    {recipe?.cooking_method.map((method) => {
                      return <li className="text-md ] ">{method}</li>;
                    })}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
