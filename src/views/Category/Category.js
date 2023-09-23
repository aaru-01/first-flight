import './Category.css';
import img1 from "./../../components/Card/apple-phone.jpg";
import img2 from "./../../components/Card/oppo.jpg";
import img3 from "./../../components/Card/vivo.jpg";
import Navbar from './../../components/Navbar/Navbar';

import Button from './../../components/Button/Button';
import Card from '../../components/Card/Card';


export default function Category(){
    return <>
   <div className="category-container">
        <Navbar />
       
        {/* <h1 className='heading-category'>Category</h1>
        <Button text="Click On About page" /> */}
        <br/><br/>
        <Card img={img1} name="Apple" price="$35000/-" />
        <Card img={img2} name="Oppo" price="$31000/-" />
        <Card img={img3} name="Vivo" price="$50000/-" />
    </div>
    </>
}
