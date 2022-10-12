import React, {useEffect} from 'react'
import {setProducts} from "../redux/action/productActions"
import axios from "axios";
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
const ProductListing = () => {
const products=useSelector((state) => state);
const dispatch = useDispatch();

const fetchedProducts = async () => {
  const response= await axios.get("https://fakestoreapi.com/products")
  .catch((err) => {
    console.log("Err", err)
  })
  
  dispatch(setProducts(response.data));
}

useEffect(() => {
  fetchedProducts();
})
 
console.log(products);
  return (
    <div>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing