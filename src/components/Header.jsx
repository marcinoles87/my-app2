import React, { useEffect, useState } from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'
import Main from './Main'
import Newsletter from './Newsletter'
import Footer from './Footer'

function Header({koszyk,setKoszyk,setDatabase,database}) {

  const [indexLoop , setIndexLoop] = useState(0);
  const [filterData,setFiltereddata] = useState('')
  const [filteredDatabase , setFilteredDatabase] =useState([])
  const [flag,setFlag] = useState(false)


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

  const handleFilterName = (e) =>{

    const newDatabase = [...database]
    // const searchNameitem = filterData

    // console.log(searchNameitem)
    const filtered = newDatabase.filter(item => item.nazwa.includes(filterData))
    console.log(filtered)

    setFlag(true)
    setFilteredDatabase(filtered)

  }

   const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }



  return (
    <div className='header-container'>
        <div className='header-elements'>

            <p className='left' onClick={handleLoopLeft}>{'<'}</p>
            <p className='right' onClick={handleLoopRight}>{'>'}</p>
            <img id="slideshow" src={kai} width="400" alt='loopimg'/>

           
            </div>

             <div className='filters'>
              <h1>Filters</h1>
              <input placeholder='name' onChange={ (e) => setFiltereddata(e.target.value)}></input>
              <input placeholder='price'></input>
              <input placeholder='category'></input>
              <button onClick={handleFilterName}>Zastosuj</button>

            

        </div>

        <div className='header-product'>
          <h1>Bestsellery </h1>
          {flag ? 
          filteredDatabase.map( (item,index) =>{
             return(
                <div className='database-element' key={index}>
                    <div className='database-element-img'>
                       <img src={item.img} alt="" /> 
                    </div>
                    <div className='database-element-info'>
                        <div className='database-element-info2'>
                            <p>{item.nazwa}</p>
                            <h2 style={{color:'rgb(0,0,190'}}> {item.cena},00 PLN</h2> 
                        </div>
                        
                         <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                    </div>
                    </div>
            )})
          
          : 
          <Database koszyk={koszyk} setKoszyk={setKoszyk} setDatabase={setDatabase} database={database}></Database>
          }
          
          <Main></Main>
          <Newsletter></Newsletter>
          <Footer></Footer>
        </div>

    </div>
  )
}

export default Header