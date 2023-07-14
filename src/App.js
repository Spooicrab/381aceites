import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarAceites from "./Components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/logo.png";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainerPage";

function App() {
  return (
    <div>
      <NavbarAceites />
      <ItemListContainer />
    </div>
  );
}
export default App;
