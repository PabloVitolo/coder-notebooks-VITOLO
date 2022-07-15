import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./styles.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { qtyProducts } = useContext(CartContext);
  if (qtyProducts === 0) {
    return (
      <div className="cart-widget">
        <AiOutlineShoppingCart size={30} color="white" />
        <span className="cart-widget-text"></span>
      </div>
    );
  }
  return (
    <div className="cart-widget">
      <AiOutlineShoppingCart size={30} color="white" />
      <span className="cart-widget-text">{qtyProducts}</span>
    </div>
  );
};

export default CartWidget;
