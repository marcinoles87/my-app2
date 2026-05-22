import React from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'

function Header() {

  const imagesLoop =  [{kai},{wl},{ifg}]
  let index = 0;

   setInterval(() => {
    index = (index + 1) % imagesLoop.length

  }, 2000);


  return (
    <div className='header-container'>
        <div className='header-elements'>
            <h1>Produkty w loopie</h1>
            <img id="slideshow" src="img1.jpg" width="400" alt='loopimg'/>

        </div>

        <div className='header-product'>
          <Database></Database>
        </div>

    </div>
  )
}

export default Header