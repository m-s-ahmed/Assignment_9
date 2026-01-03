import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const GameDetailsSingleCard = ({ games }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  return (
    <div className="space-y-5">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => navigate(from)}
      >
        <IoMdArrowRoundBack /> Back
      </button>

      <div className="border p-5 rounded-2xl ">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={games.coverPhoto}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">{games.title}</h1>
              <p className="py-6">{games.description}</p>
              <div className="flex gap-3">
                <div className="badge badge-outline badge-primary">
                  <TbCategoryPlus /> {games.category}
                </div>
                <div className="badge badge-outline badge-primary">
                  <IoStar /> {games.ratings}
                </div>
              </div>
              <p className="mt-3">
                Developed by:
                <span className="font-bold"> {games.developer}</span>
              </p>
              <NavLink className="mt-3" target="_blank" to={games.downloadLink}>
                <button className="btn btn-primary">Download Link</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsSingleCard;
