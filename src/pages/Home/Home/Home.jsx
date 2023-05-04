import React from "react";
import Banner from "../Banner/Banner";
import ChefInformations from "../ChefInformations/ChefInformations";
import RecipeIncrediant from "../RecipeIncrediant/RecipeIncrediant";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <ChefInformations></ChefInformations>
      <RecipeIncrediant></RecipeIncrediant>
    </div>
  );
};

export default Home;
