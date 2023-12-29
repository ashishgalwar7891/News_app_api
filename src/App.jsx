import { useEffect } from "react";
import "./App.css";
import { getHeadlineByCountry } from "./services/api.jsx";

import { Route, Routes } from "react-router-dom";

import { HomePage, DetailsPage, PageNotFound } from "./routes/Route.jsx";

function App() {
  useEffect(() => {
    getHeadlineByCountry();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:category" element={<DetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
