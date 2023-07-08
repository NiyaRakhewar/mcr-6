import React from "react";
import { CuisineList } from "../CuisineList";
// import { RestaurantList } from "../RestaurantList";

export const Home = () => {
  return (
    <div>
      <h1>Food Ordering App</h1>

      <CuisineList />
      {/* <RestaurantList /> */}
    </div>
  );
};
