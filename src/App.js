import React from "react";
import "./App.css";
import Cards from "./Components/ItemList/ItemList";
import NavbarAceites from "./Components/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/logo.png";
import { useEffect, useState } from "react";
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

function App() {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "Productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProductos(docs);
    };
    getProductos();
  }, []);

  return (
    <div>
      <NavbarAceites />
      {Productos.map((Productos) => {
        return (
          <div key={Productos.id}>
            <Cards data={Productos} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
