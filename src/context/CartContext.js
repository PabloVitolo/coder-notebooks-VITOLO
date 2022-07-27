import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartProducts = localStorage.getItem("cart");
    if (cartProducts) {
      setProducts(JSON.parse(cartProducts));
    }
  }, []);

  useEffect(() => {
    const qty = products.reduce((acc, product) => {
      return acc + product.qty;
    }, 0);
    setQtyProducts(qty);
  }, [products]);

  useEffect(() => {
    const totalPrice = products.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
    setTotal(totalPrice);
  }, [products]);

  const addProduct = (product) => {
    const productInCart = products.find((p) => p.id === product.id);
    if (productInCart) {
      productInCart.qty++;
    } else {
      const newProducts = [...products, product];
      setProducts(newProducts);
      localStorage.setItem("cart", JSON.stringify(newProducts));
    }
  };

  const removeProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("cart", JSON.stringify(newProducts));
  };

  const clearCart = () => {
    setProducts([]);
    localStorage.removeItem("cart");
  };

  const calculateTotal = () => {
    const totalPrice = products.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <Provider
      value={{
        products,
        addProduct,
        removeProduct,
        clearCart,
        calculateTotal,
        clearCart,
        qtyProducts,
        total,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;

//   const getQtyProducts = () => {
//     let qty = 0;
//     products.forEach((product) => (qty += product.qty));
//     setQtyProducts(qty);
//   };

//   useEffect(() => {
//     getQtyProducts();
//   }, [products]);

//   const addProduct = (product) => {
//     if (isInCart(product.id)) {
//       const found = products.find((p) => p.id === product.id);
//       const index = products.indexOf(found);
//       const aux = [...products];
//       aux[index].qty += product.qty;
//       setProducts(aux);
//     } else {
//       setProducts([...products, product]);
//     }
//   };

//   const removeProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const isInCart = (id) => {
//     return products.some((products) => products.id === id);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     products.forEach((product) => (total += product.price * product.qty));
//     return total;
//   };

//   const clearCart = () => {
//     setProducts([]);
//     setQtyProducts(0);
//     setTotal(0);
//   };

//   return (
//     <Provider
//       value={{
//         products,
//         addProduct,
//         removeProduct,
//         isInCart,
//         clearCart,
//         calculateTotal,
//         qtyProducts,
//       }}
//     >
//       {children}
//     </Provider>
//   );
// };

// export default CartProvider;
