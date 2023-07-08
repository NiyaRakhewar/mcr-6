import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RestaurantList } from "./RestaurantList";
import { RestaurantDetail } from "./RestaurantDetail";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:id" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}

export default App;
