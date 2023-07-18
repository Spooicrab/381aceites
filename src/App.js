import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarAceites from "./Components/Navbar/Navbar.js";

import Homepage from "./Pages/HomePage/Homepage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ShopPage from "./Pages/Shoppage/ShopPage";
import Marcas from "./Pages/Category/Category";

import { Provider } from "./context/Context.js";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavbarAceites />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Marcas/:Marcas" element={<Marcas />} />
          <Route path="/Checkout" element={<ShopPage />} />
          <Route path="/Detalle/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
