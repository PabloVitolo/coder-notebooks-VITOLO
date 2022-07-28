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
    const cartProducts = localStorage.getItem("cart");
    if (cartProducts) {
      const newProducts = JSON.parse(cartProducts);
      const productIndex = newProducts.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        newProducts[productIndex].qty += product.qty;
        setProducts([...newProducts]);
        localStorage.setItem("cart", JSON.stringify(newProducts));
      } else {
        setProducts([...newProducts, product]);
        localStorage.setItem("cart", JSON.stringify([...newProducts, product]));
      }
    } else {
      setProducts([product]);
      localStorage.setItem("cart", JSON.stringify([product]));
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
        qtyProducts,
        total,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
