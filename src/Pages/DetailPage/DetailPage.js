import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
// import Cards from "../../Components/ItemList/ItemList";
import ItemDetailContainer from "../../Components/ItemDetailContainer/ItemDetailContainer";

const DetailPage = () => {
  const { id } = useParams();
  const [Producto, setProducto] = useState([]);
  useEffect(() => {
    const getProducto = async () => {
      const q = query(
        collection(db, "Productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducto(docs);
    };
    getProducto();
  }, [id]);

  return (
    <div className="DetailContainer">
      {Producto.map((Producto) => {
        return (
          <div key={Producto.id}>
            {/* <Cards data={data} /> */}
            <ItemDetailContainer data={Producto} />
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
