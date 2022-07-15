import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {
  const { products, removeProduct, clearCart } = useContext(CartContext);

  
  if (products.length === 0) {
    return <h2>Está vacío tu carrito :( </h2>;
}
  return (
    <div>
      <h1 className="text-center">Tu Carrito</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} width="70px" alt="product" />
              </td>
              <td>{product.title}</td>
              <td>$ {product.price}</td>
              <td>{product.qty}</td>
              <td> $ {product.price * product.qty}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>Total: $ {products.reduce((total, product) => {
          return total + (product.price * product.qty);
        }, 0)}</h3>
        <button className="btn btn-danger btn-block" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
