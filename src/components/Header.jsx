import React from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'

function Header() {

  const handleLoopLeft = () =>{

      const imagesLoop =  [kai,wl,ifg]
      let index = 0;

    index = (index - 1) % imagesLoop.length
    document.getElementById('slideshow').src = imagesLoop[index]

  }

  const handleLoopRight = () =>{

      const imagesLoop =  [kai,wl,ifg]
      let index = 0;

    index = (index + 1) % imagesLoop.length
    document.getElementById('slideshow').src = imagesLoop[index]

  }



  return (
    <div className='header-container'>
        <div className='header-elements'>

            <p className='left' onClick={handleLoopLeft}>{'<'}</p>
            <p className='right' onClick={handleLoopRight}>{'>'}</p>
            <img id="slideshow" src={kai} width="400" alt='loopimg'/>

        </div>

        <div className='header-product'>
          <Database></Database>
        </div>

    </div>
  )
}

export default Header