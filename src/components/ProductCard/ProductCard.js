import React from 'react'
import "./ProductCard.css"

// function ProductCard(productName){
//     return(
//         <div className='product-card'>
// {productName}
//         </div>
//     )
// }
// export default ProductCard

export const ProductCard = ({name, emoji, price, bgColor}) =>{
    return(
        <div className='product-card' style={{backgroundColor: bgColor}}>
       <h2>{name}{emoji}</h2>
      <br/>
       <h3>RS.{price}</h3>
           </div>
    )
}