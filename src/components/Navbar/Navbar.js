import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    // const path = window.location.pathname;
    const currentPath = window.location.pathname;
// path = '/' = home
// path -= '/about' = about

function getActiveClass(path){
return currentPath === path ? "active" : "";
}

    return <>
    <div className="navbar">
        <span className='brand'>My Website</span>
        <Link to="/" className={getActiveClass('/')}>Home</Link>
        <Link to="/about"  className={getActiveClass('/about')}>About</Link>
        <Link to="/category"  className={getActiveClass('/category')}>Category</Link>
        <Link to='/contact'  className={getActiveClass('/contact')}>Contact</Link>
    </div>
    
    </>
}

//  <Link to="/" className={path==='/' ? 'active': ''}>Home</Link>
{/* <Link to="/about"  className={path==='/about' ? 'active': ''}>About</Link>
<Link to="/category"  className={path==='/category' ? 'active': ''}>Category</Link>
<Link to='/contact'  className={path==='/contact' ? 'active': ''}>Contact</Link> */}