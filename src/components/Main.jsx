import React from 'react'
import { Link } from 'react-router'
import mark1 from '../media/logo_header.png'

function Main() {
  return (
    <>
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

    <div className='mark-container'>
      <div className='mark-items'>
        <img src={mark1} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    </>
    
  )
}

export default Main