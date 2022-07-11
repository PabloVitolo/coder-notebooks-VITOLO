import React from "react";
import ItemCount from "../ItemCount/index";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [endBuy, setEndBuy] = useState(false);
  const { addProduct } = useContext(CartContext);

  const onAdd = (count) => {
    addProduct({ ...product, qty: count });
    setEndBuy(true);
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
        {endBuy ? (
          <Link to="/cart">
            <button className="btn btn-outline-danger">FINALIZAR</button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
