import React from "react";
import Banner from "../Banner/Banner";
import ChefInformations from "../ChefInformations/ChefInformations";
import Newletter from "../Newletter/Newletter";
import RecipeIncrediant from "../RecipeIncrediant/RecipeIncrediant";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Banner></Banner>
      <ChefInformations></ChefInformations>
      <RecipeIncrediant></RecipeIncrediant>
      <Newletter></Newletter>
    </div>
  );
};

export default Home;
