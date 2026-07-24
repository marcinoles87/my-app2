import React from 'react'
import {Link} from 'react-router'


function Porownywarka({porownaj}) {
  return (
    <div className='porownywarka-container'>

      <Link to='/porownaj'><i className="fa-solid fa-cart-plus fa-lg" style={{backgroundColor:'green'}}></i></Link>

    

    </div>
  )
}

export default Porownywarka