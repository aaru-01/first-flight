import './About.css';

import Navbar from './../../components/Navbar/Navbar';

import Button from './../../components/Button/Button';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useState } from 'react';


export default function About(){
    const [products ,setProduct] = useState([
// "Product 1",
// "Product 2",
// "Product 3",
// "Product 4",
// "Product 5",

{
    name: "Mango",
    emoji: "🥭",
    price:100,
    bgColor: "#FFC107"
},
{
    name: "Banana",
    emoji: "🍌",
    price:60,
    bgColor: "#FFEB38"
},
{
    name: "Apple",
    emoji: "🍎",
    price:150,
    bgColor: "#F44336"
},
{
    name: "Pineapple",
    emoji: "🍍",
    price:200,
    bgColor: "#4CAF50"
},
{
    name: "Grapes",
    emoji: "🍇",
    price:80,
    bgColor: "#9C27B0"
}
]);

    return <>
   <div className="about-container">
        <Navbar />
       
        <h1 className='heading-about'>Fruits</h1>
 <div className='flex-box'>
      {
products.map((productInfo) =>{
    const {name, emoji, price, bgColor} = productInfo;
    // productName={productName}/>
    return<ProductCard name={name} emoji={emoji} price={price} bgColor={bgColor}/>



})
}
</div>



      {/* <ProductCard productName = "Product 1"/>
      <ProductCard productName = "Product 2"/>
      <ProductCard productName = "Product 3"/>
      <ProductCard productName = "Product 4"/> */}
      
      
       
    </div>
    
    </>
}