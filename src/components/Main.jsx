import React from 'react'
import { Link } from 'react-router'

function Main() {
  return (
    <div className='main-container'>

      <h1>Poznaj nasze możliwości w każdej przestrzeni</h1>
      <div className='main-element-one'>
        <Link to={'/kuchnia'}></Link>
        <p>Kuchnia</p>
        
      </div>

      <div className='main-element-two'>
        <Link to={'/łazienka'}>-</Link>
        <p>Łazienka</p>
        
      </div>

      <div className='main-element-three'>
        <Link to={'/horeca'}>-</Link>
        <p>HoReCa</p>
        
      </div>

    </div>
  )
}

export default Main