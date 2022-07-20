import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="product-item">
            <div className="product-item-img text-center">
                <img width="200px" src={item.image} alt={item.name} />
            </div>
            <div className="product-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p> $ {item.price}</p>
                <Link to={`/detail/${item.id}`} className="btn btn-primary">
                    Ver producto
                </Link>
            </div>
        </div>
    </div>
    );
}


export default Item;
