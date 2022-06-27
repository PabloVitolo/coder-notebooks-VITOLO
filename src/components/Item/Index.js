import React from 'react'
import "./Styles.css";

const Item = ({product}) => {
  const {img, name, description}= product

  return (
    <div className="card">
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <button className='btn btn-primary'>Detalles</button>
</div>
  )
}

export default Item