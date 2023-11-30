import React from "react";
import { Link, useParams } from "react-router-dom";
import { SeriesJsonData } from "./SeriesJsonData.js";

function SeriesDescrption() {
  const { seriesId } = useParams();
  const selectedSeries = SeriesJsonData.find((item) => item.id == seriesId);

  return (
    <div className="description-card">
      <h2>Name:{selectedSeries.name}</h2>
      <h3>Genre:{selectedSeries.genre}</h3>
      <p>{selectedSeries.description}</p>
      <Link className="link-style" to={"/series"}>
        Back
      </Link>
      <h1>{seriesId}</h1>
    </div>
  );
}

export default SeriesDescrption;
