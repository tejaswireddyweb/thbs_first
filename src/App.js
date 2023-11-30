import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstComponent from "./FirstTask/FirstComponent";
import SeriesDescrption from "./FirstTask/SeriesDescription";
import FetchUsers from "./Fetching/FetchUsers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/series" element={<FirstComponent />} />
        <Route path="/series/:seriesId" element={<SeriesDescrption />} />
        <Route path="/users" element={<FetchUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
