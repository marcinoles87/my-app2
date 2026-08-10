import React from 'react'
import {Link} from 'react-router'


function Porownywarka({porownaj}) {
    if(porownaj.length>0){
    const element = document.querySelector('.porownywarka-container')
    element.classList.add('show')
    
  }
  return (
    <div className='porownywarka-container'>

      <Link to='/porownaj'>P</Link>

    

    </div>
  )
}

export default Porownywarka