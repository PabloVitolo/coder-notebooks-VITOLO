import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/Index";
import PulseLoader from "react-spinners/PulseLoader";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const q = categoryId
      ? query(collection("products"), where("categoryId", "==", categoryId))
      : collection(db, "products");
    getDocs(q)
      .then((result) => {
        const productsList = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(productsList);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <PulseLoader size={10} color={"#123abc"} loading={loading} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};
export default ItemListContainer;
