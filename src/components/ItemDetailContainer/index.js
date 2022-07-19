import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import ItemDetail from "../ItemDetail/Index";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data(),
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <PulseLoader size={10} color={"#123abc"} loading={loading} />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
