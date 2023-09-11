import './Category.css';

import Navbar from './../../components/Navbar/Navbar';

import Button from './../../components/Button/Button';

export default function Category(){
    return <>
   <div className="category-container">
        <Navbar />
       
        <h1 className='heading-category'>Category</h1>
        <Button text="Click On About page" />
    </div>
    
    </>
}