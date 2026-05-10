import React from 'react'
import logo from '../media/logo_header.png'
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='navbar-container'>

        <div className='navbar-logo'>
            <div className='logo'>
                <img src={logo} alt="xxxxxxxx" />
            </div>

            <div className='links'>
                <p>1</p>
                <p>2</p>
                <p>3</p> 
            </div>
            
        </div>

        <div className='navbar-elements'>
            <ul>
                <li>O Nas</li>
                <li>Promocje</li>
                <li><Link to={'produkty'}>Produkty</Link></li>
                <li>Nasze marki</li>
                <li>Kontakt</li>
            </ul>
        </div>

    </div>
  )
}

export default Nav