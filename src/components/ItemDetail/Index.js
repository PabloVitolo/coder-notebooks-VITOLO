import React from "react";
import ItemCount from "../ItemCount/index";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [buyFinalized, setBuyFinalized] = useState(false);

  const onAdd = (count) => {
    setBuyFinalized(true);
  };
  return (
    <div className="detail">
      <img src={product.image} alt={product.title} width="400" />
      <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3>$ {product.price}</h3>
        <h4>Stock: {product.stock}</h4>
      </div>
      <div>
        {buyFinalized ? (
          <Link to="/cart">
            <button>FINALIZAR</button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
