import React from "react";
import { restaurantsData } from "./data";
// import { useNavigate } from "react-router-dom";
import { Dishes } from "./Dishes";

export const RestaurantList = ({ cuisineId }) => {
  //   const navigate = useNavigate();

  console.log(cuisineId);
  const filteredRestaurants = restaurantsData?.filter(
    (restaurant) => restaurant.cuisine_id === cuisineId
  );

  return (
    <div>
      {/* <h1>Restaurants List</h1> */}
      <div className="restaurant-container">
        {filteredRestaurants?.map((restaurant) => (
          <div className="restaurant-card" key={restaurant?.id}>
            <h2>Dishes by {restaurant?.name}</h2>
            <Dishes restaurantName={restaurant?.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
