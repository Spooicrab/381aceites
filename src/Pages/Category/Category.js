import React from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cards from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "../../Components/ItemListContainer/ItemListContainer.css";

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
