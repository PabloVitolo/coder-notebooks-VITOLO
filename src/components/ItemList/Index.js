import React from 'react'
import Item from '../Item/Index'
import "./Styles.css";

const ItemList = ({products}) => {
  
  return (
    <div>
        <h3 className='wellcome-page'>Lista de productos</h3>
        <div className= 'products-items'>
        {products.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemList

