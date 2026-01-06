import React from "react";
import { Link } from "react-router";
import HomePopularGames from "./HomePopularGames";
import GameDetails from "./GameDetails";
import Caurosel from "./Caurosel";
import NewsLatter from "./NewsLatter";

const Home = () => {
  return (
    <div className="">
      <div>
        {/* Banner Section */}
        <Caurosel></Caurosel>
      </div>
      <div className="mt-5 mb-10 text-center">
        <p className="text-4xl font-bold ">TOP THREE RATED GAMES</p>
      </div>
      {/* Popular Games */}
      <HomePopularGames></HomePopularGames>

      {/* Newsletter Section */}
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
