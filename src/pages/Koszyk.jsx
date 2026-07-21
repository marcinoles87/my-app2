import React, { useState } from 'react'
import {Link} from 'react-router'

function Koszyk({koszyk}) {

  if(koszyk.length>0){
   const element = document.querySelector('.koszyk-container')
   element.classList.toggle('.show')
  }

  return (
    <div className='koszyk-container'>

        <Link to='/zamowienie'><i className="fa-solid fa-cart-plus fa-lg"></i> {koszyk.length}</Link>
       

    </div>
  )
}

export default Koszyk