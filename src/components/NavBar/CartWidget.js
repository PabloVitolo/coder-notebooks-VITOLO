import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./styles.css"
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const { qtyProducts } = useContext(CartContext);
    return (
        <div className="shop">
            <AiOutlineShoppingCart color="white" size={25} />
            <p>{qtyProducts}</p>
        </div>
    );
};

export default CartWidget;
