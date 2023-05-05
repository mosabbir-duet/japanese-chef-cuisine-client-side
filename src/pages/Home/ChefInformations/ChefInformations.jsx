import React, { useEffect, useState } from "react";
import Spinner from "../../../Spinner/Spinner";
import SingleChefInfo from "../SingleChefInfo/SingleChefInfo";

const ChefInformations = () => {
  const [chefInformations, setChefInformations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://japanese-chef-cuisine-server-side-mosabbir-duet.vercel.app/chefInformation"
    )
      .then((res) => res.json())
      .then((data) => setChefInformations(data))
      .catch((error) => console.error(error.message));
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto my-12">
      <div className="pb-4 border-b-2  mb-12">
        <h2 className="text-5xl text-center font-semibold   ">
          Our <span className="text-[#ffc000]">Chef's</span>
        </h2>
        <p className="text-center py-2">
          Get access to thousands of recipes from famous chefs.
        </p>
      </div>
      {loading ? <Spinner></Spinner> : <></>}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12">
        {chefInformations.map((chef) => (
          <SingleChefInfo key={chef.id} chef={chef}></SingleChefInfo>
        ))}
      </div>
    </div>
  );
};

export default ChefInformations;
