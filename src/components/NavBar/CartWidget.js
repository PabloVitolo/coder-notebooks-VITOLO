import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./styles.css"

const CartWidget = () => {
    return (
        <div className="shop">
            <AiOutlineShoppingCart color="white" size={25} />
            <p>4</p>
        </div>
    );
};

export default CartWidget;
