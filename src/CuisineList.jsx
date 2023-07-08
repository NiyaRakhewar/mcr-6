import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { cuisineData } from "./data";
import { RestaurantList } from "./RestaurantList";

export const CuisineList = () => {
  const [cuisineId, setCuisine] = useState();

  return (
    <div className="cuisine-container">
      <h2>Select your Cuisine:</h2>

      <div className="cuisine">
        {cuisineData.map((cuisine) => (
          <div key={cuisine.id}>
            <button
              onClick={() => setCuisine(cuisine.id)}
              className="cuisine-name"
            >
              {cuisine.name}
            </button>
          </div>
        ))}
      </div>
      <RestaurantList cuisineId={cuisineId} />
    </div>
  );
};
