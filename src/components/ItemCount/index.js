import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    return (
        <>
        <div className="qty mt-5"> 
            <button className="minus bg-dark" onClick={() => handlerClickSubtrack()}>-</button>
            <h2 className="master-count">{count}</h2>
            <button className="plus bg-dark" onClick={() => handlerClickAdd()}>+</button>
            <button className="btn btn-primary" onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
        </div>    
        </>

    );
}



export default ItemCount