import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const Card = ({ id, name, genre, status, handleClick }) => {
  const { idParam } = useParams();
  return (
    <div
      className={status === 0 ? "cards" : "cardSelected"}
      onClick={() => {
        handleClick(name);
      }}
    >
      <h3>{name}</h3>
      <h3>Genre:{genre}</h3>
      <h3>Status: {status}</h3>
      <Link className="link-style" to={`/series/${id}`}>
        View More
      </Link>
    </div>
  );
};

export default Card;
