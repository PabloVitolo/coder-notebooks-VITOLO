import React from 'react'
import Item from '../Item/Index'
import "./Styles.css";

const ItemList = ({products}) => {
  
  return (
    <div>
        <h3>Lista de productos</h3>
        <div className= 'product-list'>
        {products.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemList

