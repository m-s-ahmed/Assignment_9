import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

const GameDetailsSingleCard = ({ games }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  return (
    <div className="space-y-5">
      <button className="btn btn-outline btn-sm" onClick={() => navigate(from)}>
        Back
      </button>
      <img
        className="w-full h-[350px] object-cover"
        src={games.coverPhoto}
        alt=""
      />
      <h2 className="text-2xl">{games.title}</h2>
      {/* <p>{news.details}</p> */}
      {/* <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        Back to category
      </Link> */}
    </div>
  );
};

export default GameDetailsSingleCard;
