import "./Card.css";
import { useEffect, useState } from "react";
export default function Card(props) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

    // function valueIsChagned(){
    //    console.log (`New value : ${count} `)
    // }

    // useEffect(function valueIsChagned(){
    //     console.log (`New value : ${count} `)
    //  },[count]);
    useEffect(() => {
console.log(`count is ${count} now!.`)
},[count])


    const { img, name, price } = props;
    return (
        <>
            <div className="main-container">
                <div className="cards">
                    <img src={img} alt="Card Image" className="img-vivo" /> <br />
                    <h1 className="heading-name">{name}</h1><br />
                    <span className="price">{price}</span><br /><br />
                    <button type="button" className="btn-sign" onClick={increment}>+</button>
                    <span className="btn-sign">{count}</span>
                    <button type="button" className="btn-sign" onClick={decrement}>-</button>
                </div>
                <br />
            </div>


        </>
    )
}

