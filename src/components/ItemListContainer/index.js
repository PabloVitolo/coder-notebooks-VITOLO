import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/Index";
import { getProds } from "../../Mocks/ApiProductos";
import PulseLoader from "react-spinners/PulseLoader";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProds(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="landing">
      {loading ? <PulseLoader /> : <ItemList items={products} />}
    </div>
  );
};

export default ItemListContainer;
