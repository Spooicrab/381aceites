import React from "react";
import "./ItemListContainer.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cards from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "Productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, []);

  return (
    <div className="ProductosG">
      {Productos.map((Productos) => {
        return (
          <div key={Productos.id}>
            <Cards data={Productos} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
