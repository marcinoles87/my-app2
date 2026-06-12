import React, { useEffect, useState } from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'
import Main from './Main'
import Newsletter from './Newsletter'

function Header({koszyk,setKoszyk}) {

  const [indexLoop , setIndexLoop] = useState(0);


  const handleLoopLeft = () =>{

      const imagesLoop =  [kai,wl,ifg]
      setIndexLoop(indexLoop-1)
      if(indexLoop<imagesLoop.length-1){
        setIndexLoop(0)
      } 

    
    document.getElementById('slideshow').src = imagesLoop[indexLoop]

  }

  const handleLoopRight = () =>{

      const imagesLoop =  [kai,wl,ifg]
      setIndexLoop(indexLoop+1)
      console.log(indexLoop)

      if(indexLoop>=imagesLoop.length-1){
        setIndexLoop(0)
      }    
    document.getElementById('slideshow').src = imagesLoop[indexLoop]

  }



  return (
    <div className='header-container'>
        <div className='header-elements'>

            <p className='left' onClick={handleLoopLeft}>{'<'}</p>
            <p className='right' onClick={handleLoopRight}>{'>'}</p>
            <img id="slideshow" src={kai} width="400" alt='loopimg'/>

        </div>

        <div className='header-product'>
          <h1>Bestsellery </h1>
          <Database koszyk={koszyk} setKoszyk={setKoszyk}></Database>
          <Main></Main>
          <Newsletter></Newsletter>
        </div>

    </div>
  )
}

export default Header