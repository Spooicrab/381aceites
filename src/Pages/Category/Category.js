import React from "react";
import "../../Components/ItemListContainer/ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import Cards from "../../Components/ItemList/ItemList";

const Marcas = () => {
  const { Marcas } = useParams();
  const [Productos, setProductos] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, "Productos"),
        where("marca", "==", Marcas)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, [Marcas]);

  return (
    <div className="ProductosG">
      {Productos.map((data) => {
        return (
          <div key={data.id}>
            <Cards data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Marcas;
