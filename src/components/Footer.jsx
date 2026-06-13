import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <h4>Mapa strony</h4>
         <li><Link to={'/'}>Home</Link></li>
         <li><Link to={'produkty'}>Produkty</Link></li>
         <li><Link to={'kuchnia'}>Kuchnia</Link></li>
         <li><Link to={'jadalnia'}>Jadalnia</Link></li>
         <li><Link to={'łazienka'}>Łazienka</Link></li>
         <li><Link to={'kontakt'}>Kontakt</Link></li>
         <li><Link to={'wysyłka'}>Wysyłka</Link></li>
      </div>
    </div>
  )
}

export default Footer