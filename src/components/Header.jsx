import React from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'

function Header() {

  const imagesLoop =  [kai,wl,ifg]
  let index = 0;

   setInterval(() => {
    index = (index + 1) % imagesLoop.length
    document.getElementById('slideshow').src = imagesLoop[index]
    console.log(index)
  }, 5000);


  return (
    <div className='header-container'>
        <div className='header-elements'>
            <img id="slideshow" src={kai} width="400" alt='loopimg'/>

        </div>

        <div className='header-product'>
          <Database></Database>
        </div>

    </div>
  )
}

export default Header