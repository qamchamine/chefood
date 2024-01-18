import React,{useContext} from 'react';
import {ShoppingContext} from "./context/ShoppingContext";

export default function ProductListItem({product}) {
  const {addToCart} = useContext(ShoppingContext);

  return (
    <div className="col-md-4">
        <div className="card mb-2" style={{width: '18rem'}}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary"
                    onClick={() => addToCart(product)}>
                    <i className="bi bi-cart-check-fill"></i> Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}
