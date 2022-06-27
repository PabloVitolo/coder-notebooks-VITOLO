import React from 'react'
import Item from '../Item/Index'
import "./Styles.css";

const ItemList = ({productList}) => {
  
  return (
    <div>
        <h3>Lista de productos</h3>
        <div className= 'lista-productos'>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList