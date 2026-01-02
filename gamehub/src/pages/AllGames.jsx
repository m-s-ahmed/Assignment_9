import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
        );
        setGames(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
    <div className="max-w-7xl mx-auto p-4 my-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold"> All Games ({games.length})</h2>
        <Link to="/" className="btn btn-outline btn-sm">
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="card bg-base-100 shadow hover:shadow-lg transition"
          >
            <figure className="h-52">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="h-full w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title text-lg">{game.title}</h3>

              <div className="flex gap-2 text-sm">
                <span className="badge badge-outline">{game.category}</span>
                <span className="badge badge-outline">⭐ {game.ratings}</span>
              </div>

              <div className="card-actions justify-end mt-2">
                <Link
                  to={`/game-details/${game.id}`}
                  state={{ from: location.pathname}}
                >
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
