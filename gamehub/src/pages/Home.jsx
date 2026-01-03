import React from "react";
import { Link } from "react-router";
import HomePopularGames from "./HomePopularGames";
import GameDetails from "./GameDetails";
import Caurosel from "./Caurosel";

const Home = () => {
  return (
    <div>
      <div>
        {/* Banner Section */}
        <Caurosel></Caurosel>
      </div>

      {/* Popular Games */}
      <HomePopularGames></HomePopularGames>

      {/* Newsletter Section */}
    </div>
  );
};

export default Home;
