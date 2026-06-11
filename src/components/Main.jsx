import React from 'react'
import { Link } from 'react-router'

function Main() {
  return (
    <div className='main-container'>
      <div className='main-element-one'>
        <Link to={'/mainWydarzenie'}></Link>
        <p>Kuchnia</p>
        
      </div>

      <div className='main-element-two'>
        <Link to={'/mainWydarzenie'}>-</Link>
        <p>Łazienka</p>
        
      </div>

      <div className='main-element-three'>
        <Link to={'/mainWydarzenie'}>-</Link>
        <p>HoReCa</p>
        
      </div>

    </div>
  )
}

export default Main