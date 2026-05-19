import React from 'react'
import Database from '../Database/Database'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-elements'>
            <h1>Produkty w loopie</h1>
        </div>

        <div className='header-product'>
          <Database></Database>
        </div>

    </div>
  )
}

export default Header