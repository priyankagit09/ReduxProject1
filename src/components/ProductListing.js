import React, {useEffect} from 'react'
import {setProducts, fetchProducts} from "../redux/action/productActions"

import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
const ProductListing = () => {
const products=useSelector((state) => state);
const dispatch = useDispatch();

// const fetchedProducts = async () => {
//   const response= await axios.get("https://fakestoreapi.com/products")
//   .catch((err) => {
//     console.log("Err", err)
//   })
  
//   dispatch(setProducts(response.data));
// }

useEffect(() => {
  dispatch(fetchProducts());
},[])
 
console.log(products);
  return (
    <div>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing