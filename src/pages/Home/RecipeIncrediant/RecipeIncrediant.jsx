import React from "react";

const RecipeIncrediant = () => {
  return (
    <div className="container mx-auto bg-yellow-50 my-12 ">
      <div className="pb-4 border-b-2 mb-12">
        <h2 className="text-5xl text-center font-semibold   ">
          Recipe by <span className="text-[#ff0018]">Ingredients</span>
        </h2>
        <p className="text-center py-2">
          Recipes organized by primary and important ingredients, like oils,
          flours and herbs.
        </p>
      </div>
    </div>
  );
};

export default RecipeIncrediant;
