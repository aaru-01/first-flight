import './About.css';

import Navbar from './../../components/Navbar/Navbar';

import Button from './../../components/Button/Button';

export default function About(){
    return <>
   <div className="about-container">
        <Navbar />
       
        <h1 className='heading-about'>About</h1>
        <Button text="Click On About page" />
    </div>
    
    </>
}