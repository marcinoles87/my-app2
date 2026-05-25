import React, { useEffect, useState } from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'

function Header() {

  const [indexLoop , setIndexLoop] = useState(1);

  useEffect( () =>{
    setIndexLoop(indexLoop)
  },[])


  const handleLoopLeft = () =>{
    console.log(indexLoop)

      const imagesLoop =  [kai,wl,ifg]
      setIndexLoop(indexLoop-1)
      console.log(indexLoop)
      if(indexLoop<1){
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

            <p className='left' onClick={ () =>handleLoopLeft(indexLoop-1)}>{'<'}</p>
            <p className='right' onClick={() =>handleLoopRight(indexLoop+1)}>{'>'}</p>
            <img id="slideshow" src={kai} width="400" alt='loopimg'/>

        </div>

        <div className='header-product'>
          <Database></Database>
        </div>

    </div>
  )
}

export default Header