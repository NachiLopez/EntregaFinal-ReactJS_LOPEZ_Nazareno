import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="left">
                <img id='crysys_logo' src="../../../public/crysys_logo.png" alt="crysys_logo" />
                <h1>Crysis</h1>
            </Link>
            <ul className='itemList'>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Pantalones</a></li>
                <li><a href="#">Zapatos</a></li>
            </ul>
            <div className="right">
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar