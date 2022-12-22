import React from 'react';
import './global.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='menu'>
            <h1 className='h1-header'>Nasa API</h1>
                <div className='wrapper-header'>
                <Link to={`/`} className='navbar-link'>Home</Link>
                <Link to={`/landing`} className='navbar-link'>Asteroides</Link>
                <Link to={`/neas`} className='navbar-link'>NEAs</Link>
                </div>
        </nav>
        
    )
}

export default Header