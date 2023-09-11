import './Home.css';

import Navbar from "./../../components/Navbar/Navbar"

import Button from "./../../components/Button/Button"
export default function Home(){
    return <>
    <div className="home-container">
        <Navbar />
       
        <h1 className='heading-home'>Home</h1>
        <br/><br/>
        <Button text="Click on home page" />
    </div>
    
    </>
}