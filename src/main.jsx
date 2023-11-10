import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import OurTeam from "./components/ourTeam/swiper/OurTeam.jsx";
import First from "./components/Preloader/First.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<First/>}></Route>
        <Route path="/ourteam" element={<OurTeam/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
