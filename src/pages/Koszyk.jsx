import React from 'react'
import {Link} from 'react-router'

function Koszyk({koszyk}) {
  return (
    <div className='koszyk-container'>
        
        <Link to='/zamowienie'>{koszyk.length}</Link>
       

    </div>
  )
}

export default Koszyk