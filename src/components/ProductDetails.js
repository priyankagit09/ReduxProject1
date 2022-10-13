import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProduct, removeSelectedProduct} from '../redux/action/productActions'
 

const ProductDetails = () => {
  const product= useSelector((state) => state.product)
  const {image, title, price, category, description}=product
  const {productId} = useParams();
  const dispatch= useDispatch();
  console.log(product);

// const fetchProductDetail = async () => {

//   const response= await axios
//   .get(`https://fakestoreapi.com/products/${productId}`)
//   .catch((err) =>  {console.log(err)
  
//   })
//   dispatch(selectedProduct(response.data))  
// }
useEffect(() => {
  if (productId && productId !=="") dispatch(fetchProduct(productId))
return () => {
  dispatch(removeSelectedProduct());
}
 
}, [productId])

  return (
    <div>
      {Object.keys(product).length ===0 ? (<div>...Loading</div>) : (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetails