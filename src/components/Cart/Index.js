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
} from "firebase/firestore";
import Formulario from "../Form/form";

const Cart = () => {
  const { products, removeProduct, clearCart, total } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (products.length === 0 && orderId === null) {
    return (
      <div className="cart">
        <h2>carrito vacio</h2>
        <p>
          <Link to="/">continuar comprando</Link>
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
    const updateStock = () => {
      products.forEach((product) => {
        const productCollection = collection(db, "products", product.id);
        updateDoc(productCollection, product.id, {
          stock: product.stock - product.qty,
        })
          .then(() => {
            console.log("Stock updated");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    updateStock();
    clearCart();
  };

  if (orderId) {
    return (
      <div>
        <div className="cart-success">
          <h2>Gracias por su compra!</h2>
          <p>Su orden ID es {orderId}</p>
          <Link to="/">Volver a la tienda</Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <table className="table table-striped">
        <h1 className="text-center">Tu Carrito</h1>
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
        <h3>Total: $ {total}</h3>
        <button className="btn btn-danger btn-block" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/">
          <button className="btn btn-outline-primary btn-lg">
            Volver a la tienda
          </button>
        </Link>
        <div className="cart-buttons">
          <button onClick={() => setShowForm(true)}>DATOS CLIENTE</button>
          <button onClick={generateOrder}>CONFIRMAR PEDIDO</button>
        </div>
        {showForm && <Formulario />}
      </div>
    </div>
  );
};

export default Cart;

//   // const checkout = () => {
//   //   const orderCollection = collection(db, "orders");
//   //   addDoc(orderCollection, {
//   //     buyerData,
//   //     products,
//   //     orderId: orderId,
//   //     date: serverTimestamp(),
//   //     total: calculateTotal(),
//   //   })
//   //     .then((res) => {
//   //       setOrderId(res.id);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   //   const updateCollection = doc(db, "products", orderId);
//   //   updateDoc(updateCollection, {
//   //     stock: products.map((product) => {
//   //       return {
//   //         id: product.id,
//   //         stock: product.stock - product.qty,
//   //       };
//   //     }),
//   //   })
//   //     .then((res) => {
//   //       console.log(res);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   // if (showForm) {
//   //   return (
//   //     <div>
//   //       <div className="cart-success">
//   //         <h2>Gracias por su compra!</h2>
//   //         <p>Su orden ID es {orderId}</p>
//   //         <Link to="/">Volver a la tienda</Link>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   if (products.length === 0) {
//     return (
//       <div>
//         <Link to="/">
//           <button className="btn-outline-primary btn-lg">
//             Carrito Vacío! Volver a la tienda
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1 className="text-center">Tu Carrito</h1>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Producto</th>
//             <th>Precio</th>
//             <th>Cantidad</th>
//             <th>Total</th>
//             <th>Quitar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>
//                 <img src={product.image} width="70px" alt="product" />
//               </td>
//               <td>{product.title}</td>
//               <td>$ {product.price}</td>
//               <td>{product.qty}</td>
//               <td> $ {product.price * product.qty}</td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => removeProduct(product.id)}
//                 >
//                   X
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="cart-total">
//         <h3>Total: $ {calculateTotal()}</h3>
//         <button className="btn btn-danger btn-block" onClick={clearCart}>
//           Vaciar Carrito
//         </button>
//         <Link to="/">
//           <button className="btn btn-outline-primary btn-lg">
//             Volver a la tienda
//           </button>
//         </Link>
//         {/* onClick={checkout} */}
//           <button className="btn btn-success btn-lg" >
//             concretar pedido
//           </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
