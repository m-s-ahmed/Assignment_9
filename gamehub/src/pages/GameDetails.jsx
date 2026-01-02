import React, { useEffect, useState } from "react";
import GameDetailsSingleCard from "./GameDetailsSingleCard";
import { useLoaderData, useParams } from "react-router";

const GameDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [games, setGames] = useState({});

  useEffect(() => {
    const gameDetials = data.find((singleGames) => singleGames.id == id);
    setGames(gameDetials);
  }, [data, id]);

  return (
    <div>
      <GameDetailsSingleCard games={games}></GameDetailsSingleCard>
    </div>
  );
};

export default GameDetails;
