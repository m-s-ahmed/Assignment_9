import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoStar } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
const HomePopularGames = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
        );
        setPopularGames(sorted.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
        {popularGames.map((game) => (
          <div className="card card-side bg-base-200 shadow-sm flex flex-col">
            <div className="p-3">
              <img
                className="w-full h-full  rounded-sm"
                src={game.coverPhoto}
                alt={game.title}
              />
            </div>

            <div className="card-body items-center">
              <h2 className="card-title font-bold text-xl">{game.title}</h2>
              <div className=" mt-2 flex gap-2 text-sm">
                <span className="badge badge-outline badge-primary ">
                  <TbCategoryPlus />
                  {game.category}
                </span>
                <span className="badge badge-outline badge-primary ">
                  <IoStar /> {game.ratings}
                </span>
              </div>
              <div className="card-actions mt-2">
                <Link to={`/game-details/${game.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/all-games" className="btn btn-primary font-bold">
          All Games
        </Link>
      </div>
    </div>
  );
};

export default HomePopularGames;
