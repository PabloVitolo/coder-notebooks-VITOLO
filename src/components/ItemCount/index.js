import React, { useState } from 'react'
import "./Styles.css";

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

  return (
    <div className="item-count">
        <div className="item-count-buttons">
            <button className="btn btn-outline-primary" onClick={handlerClickSubtract}>-</button>
            <span className="item-count-value"> {count} </span>
            <button className="btn btn-outline-primary" onClick={handlerClickAdd}>+</button>
        </div>
        <button className="btn btn-outline-success" onClick={handlerClickAddToCart}>AÑADIR AL CARRITO</button>
    </div>
  )
}








export default ItemCount;
