import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
const ProductComponent = () => {
  const products=useSelector((state) => state.allProducts.products);
  
  
  
  return (
    <div>
      <div>
        <ul>
          {products.map((each) => {
            const {id, title, image, price, category}=each
            return (
             <li key={id}>
              <Link to={`/product/${id}`}>
              <h1>{title}</h1>
              <img src={image} alt={title}/>
              <p>{price}</p>
              <p>{category}</p>
              </Link>
             </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductComponent