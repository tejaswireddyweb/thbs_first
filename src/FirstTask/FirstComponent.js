import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "./Card.js";
import { SeriesJsonData } from "./SeriesJsonData.js";

function FirstComponent() {
  console.log(SeriesJsonData);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [series, setSeries] = useState(SeriesJsonData);

  const handleClick = (name) => {
    setSelectedCard(name);
  };

  useEffect(() => {
    // const hello = selectedCard;
    setSeries((prevData) => {
      return prevData.map((movie) => {
        return movie.name === selectedCard
          ? { ...movie, selectedComponent: 1 }
          : { ...movie, selectedComponent: 0 };
      });
    });
  }, [selectedCard]);
  return (
    <div className="top">
      <h1 className="series-name">Name:{selectedCard}</h1>
      {series.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            genre={data.genre}
            status={data.selectedComponent}
            handleClick={handleClick}
          />
        );
      })}
      <button className="remove-button" onClick={() => setSeries([])}>
        Clear Items
      </button>
    </div>
  );
}

export default FirstComponent;
