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
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-detail-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="item-detail-info-price">
          <span>$ {product.price}</span>
        </div>
        <div className="item-detail-info-stock">
          <span> stock: {product.stock}</span>
        </div>
        <div>
          {endBuy ? (
            <Link to="/cart">
              <button className="item-count-buttons btn btn-outline-danger">
                TERMINAR MI COMPRA
              </button>
            </Link>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
        <div className="Seguir comprando">
          <Link to="/">
            <button className="item-count-buttons btn btn-outline-primary">
              Seguir comprando
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
