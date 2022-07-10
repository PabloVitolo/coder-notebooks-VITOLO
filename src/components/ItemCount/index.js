import React, { useState } from 'react'

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
    <div>
      <div>
        <button onClick={() => handlerClickAdd()} className="btn btn-outline-success"> + </button>
        <p>{count}</p>
        <button onClick={() => handlerClickSubtract()} className="btn btn-outline-danger"> - </button>
      </div>
      <div>
      <button onClick={() => handlerClickAddToCart()} className="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
};





export default ItemCount;
