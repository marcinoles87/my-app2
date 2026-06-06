import React from 'react'
import logo from '../media/logo_header.png'
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='navbar-container'>

        <div className='navbar-promo'>
                <h1>Promocja -20% od ceny podstawowej ....</h1>
        </div>

        <div className='navbar-logo'>
            <div className='logo'>
                <img src={logo} alt="xxxxxxxx" />
            </div>

            <div className='links'>
                <i class="fa-regular fa-envelope fa-2xl"></i>
                <i class="fa-regular fa-circle-user fa-2xl"></i>
                
            </div>
            
        </div>

        <div className='navbar-elements'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'produkty'}>Produkty</Link></li>
                <li><Link to={'kuchnia'}>Kuchnia</Link></li>
                <li><Link to={'jadalnia'}>Jadalnia</Link></li>
                <li><Link to={'łazienka'}>Łazienka</Link></li>
                <li><Link to={'kontakt'}>Kontakt</Link></li>
                <li><Link to={'wysyłka'}>Wysyłka</Link></li>
                
            </ul>
        </div>

    </div>
  )
}

export default Nav