import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import Formulario from "../Form/form";
import "./Index.css";

const Cart = () => {
  const { products, removeProduct, clearCart, total } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (products.length === 0 && orderId === null) {
    return (
      <div className="empty-cart">
        <h2>carrito vacio! :( </h2>
        <p>
          <Link to="/">Continuar Comprando!!!</Link>
        </p>
      </div>
    );
  }

  const generateOrder = (user) => {
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, {
      user,
      products,
      total: total,
      date: serverTimestamp(),
    })
      .then((res) => {
        setOrderId(res.id);
      })
      .catch((err) => {
        console.log(err);
      });

    products.forEach((product) => {
      const productCollection = doc(db, `products/${product.id}`);
      updateDoc(productCollection, {
        stock: product.stock - product.qty,
      });
    });
    clearCart();
  };

  if (orderId) {
    return (
      <div>
        <div className="cart-success">
          <h2>Gracias por su compra!</h2>
          <p>
            Su orden ID es <span>{orderId}</span>
          </p>
          <p>
            <Link to="/">Volver a la tienda</Link>
          </p>
        </div>
      </div>
    );
  }
  return showForm ? (
    <div>
      <h1 className="text-center">Formulario de contacto</h1>
      <Link to="/">
        <button className="btn btn-outline-primary">Volver a la tienda</button>
      </Link>

      <div className="contact-form">
        <Formulario
          generateOrder={generateOrder}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      </div>
    </div>
  ) : (
    <div>
      <h1 className="text-center">Tu Carrito</h1>
      <table className="table table-striped">
        <thead>
          {" "}
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SubTotal</th>
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
        <h3>Total: $ {total}</h3>

        <button
          onClick={() => setShowForm(true)}
          className="btn btn-success btn-lg"
        >
          {" "}
          Comprar{" "}
        </button>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-outline-primary btn-lg">
            Volver a la tienda
          </button>
        </Link>
      </div>
      <div>
        <button className="btn btn-danger btn-sm" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};
export default Cart;
