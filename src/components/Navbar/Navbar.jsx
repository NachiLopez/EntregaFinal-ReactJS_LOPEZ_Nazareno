import React from 'react'
import './Navbar.css'
import CartWidget from '../CartComponents/CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="left-nav">
                <img id='crysis_logo' src="https://i.ibb.co/6gCw0gg/crysys-logo.png" alt="crysis_logo" />
                <h1>Crysis</h1>
            </Link>
            <ul className='item-category-nav'>
                <li><Link to={'/categoria/remeras'}>Remeras</Link></li>
                <li><Link to={'/categoria/hoddies'} >Hoddies</Link></li>
                <li><Link to={'/categoria/zapatillas'}>Zapatillas</Link></li>
            </ul>
            <div className="rigth-nav">
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar