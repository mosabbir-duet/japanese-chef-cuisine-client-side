import React from "react";
import Banner from "../Banner/Banner";
import ChefInformations from "../ChefInformations/ChefInformations";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <ChefInformations></ChefInformations>
    </div>
  );
};

export default Home;
