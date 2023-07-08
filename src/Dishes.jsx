import React from "react";
import { restaurantsData } from "./data";

export const Dishes = ({ restaurantName }) => {
  const filteredData = restaurantsData.find(
    (restaurant) => restaurant.name === restaurantName
  );

  console.log(filteredData);
  return (
    <div className="dishes-container">
      {filteredData.menu.map((dish) => (
        <div className="dish-card">
          <img src={dish.imgSrc} alt="" />
          <h3>
            <strong>{dish.name}</strong>
          </h3>
          <p>
            Rs. {dish.price} for {dish.qty}
          </p>
          <p>{filteredData.name}</p>
        </div>
      ))}
    </div>
  );
};
