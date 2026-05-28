import React, { useState } from 'react'
import {Link} from 'react-router'

function Koszyk({koszyk}) {

  return (
    <div className='koszyk-container'>

        <Link to='/zamowienie'><i className="fa-solid fa-cart-plus fa-xl"></i> {koszyk.length}</Link>
       

    </div>
  )
}

export default Koszyk