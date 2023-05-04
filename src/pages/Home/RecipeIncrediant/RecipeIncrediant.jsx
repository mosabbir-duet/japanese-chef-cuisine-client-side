import React from "react";

const RecipeIncrediant = () => {
  return (
    <div className="container mx-auto bg-yellow-50 my-12 py-8">
      <div className="pb-4 border-b-2 mb-12">
        <h2 className="text-5xl text-center font-semibold   ">
          Recipe by <span className="text-[#ff0018]">Ingredients</span>
        </h2>
        <p className="text-center py-2">
          Recipes organized by primary and important ingredients, like oils,
          flours and herbs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-24 my-8">
        <div className="border border-spacing-3 border-red-500  rounded-xl py-6  text-center">
          <img
            src="../../../../public/recipe/chicken.png"
            alt=""
            className="h-20 w-20 mx-auto "
          />
          <h1>Chicken</h1>
          <p>10 recipe</p>
        </div>
        <div className="border border-spacing-3 border-red-500  rounded-xl py-6  text-center">
          <img
            src="../../../../public/recipe/rice.png"
            alt=""
            className="h-20 w-20 mx-auto "
          />
          <h1>Rice</h1>
          <p>25 recipe</p>
        </div>
        <div className="border border-spacing-3 border-red-500  rounded-xl py-6  text-center">
          <img
            src="../../../../public/recipe/shrimp.png"
            alt=""
            className="h-20 w-20 mx-auto "
          />
          <h1>Shrimp</h1>
          <p>10 recipe</p>
        </div>
        <div className="border border-spacing-3 border-red-500  rounded-xl py-6  text-center">
          <img
            src="../../../../public/recipe/chicken.png"
            alt=""
            className="h-20 w-20 mx-auto "
          />
          <h1>Chicken</h1>
          <p>10 recipe</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeIncrediant;
