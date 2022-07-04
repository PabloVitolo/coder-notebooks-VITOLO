import React, { useEffect, useState } from "react";
import { getProd } from "../../Mocks/ApiProductos";
import PulseLoader from "react-spinners/PulseLoader";
import ItemDetail from "../ItemDetail/Index";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProd(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <PulseLoader />
      ) : (
        <>
          <ItemDetail product={product} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
