import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='menu'>
            <h1>Nasa API</h1>
                <div className='wrapper'>
                <Link to={`/`} className='navbar-link'>Home</Link>
                <Link to={`/landing`} className='navbar-link'>Asteroides</Link>
                <Link to={`/neas`} className='navbar-link'>NEAs</Link>
                </div>
        </nav>
        
    )
}

export default Header