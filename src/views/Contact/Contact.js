import './Contact.css';

import Navbar from './../../components/Navbar/Navbar';

import Button from './../../components/Button/Button';

export default function Contact(){
    return <>
   <div className="contact-container">
        <Navbar />
       
        <h1 className='heading-contact'>Contact</h1>
        <Button text="Click On Contact page" />
    </div>
    
    </>
}