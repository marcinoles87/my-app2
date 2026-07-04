import React, { useEffect, useState } from 'react'
import Database from '../Database/Database'
import kai from '../media/kaiLoop.png'
import wl from '../media/wlLoop.png'
import ifg from '../media/ifLoop.png'
import Main from './Main'
import Newsletter from './Newsletter'
import Footer from './Footer'

function Header({koszyk,setKoszyk,setDatabase,database,setProduktOpis}) {

  const [indexLoop , setIndexLoop] = useState(0);
  const [filterData,setFiltereddata] = useState('')
  const [filteredDatabase , setFilteredDatabase] =useState([])
  const [filterPriceDo , setFileredPriceDo] = useState(Number)
  const [filterPriceOd , setFileredPriceOd] = useState(Number)
  const [filterCategory , setCategory] = useState([])
  const [flag,setFlag] = useState(false)


  const handleLoopLeft = () =>{

      const imagesLoop =  [kai,wl,ifg]
      console.log(indexLoop)
      setIndexLoop(indexLoop-1)
      if(indexLoop===0){
        setIndexLoop(2)
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
    const filtered = newDatabase.filter(item => item.nazwa.toUpperCase().includes(filterData) && item.category.includes(filterCategory) )

    setFlag(true)
    setFilteredDatabase(filtered)

    if(filterPriceDo>0){
          console.log(filterPriceDo)
          const filtered = newDatabase.filter(item => item.cena <= filterPriceDo)
          console.log(filtered)
          setFilteredDatabase(filtered)

    }

    if(filterPriceOd>0){
      console.log(filterPriceOd)
          const filtered = newDatabase.filter(item => item.cena >= filterPriceOd)
          console.log(filtered)
          setFilteredDatabase(filtered)

    }

  }



   const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }

    const handleReset = () =>{
      setFlag(false)
      const resetElement = document.querySelector('input[type=number]')
      resetElement.value = ''
      const secondElement = document.querySelector('input:nth-of-type(3)')
      secondElement.value = ''
      const firstInput = document.querySelector('input:nth-of-type(1)')
      firstInput.value = ''

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
              <input placeholder='name' onChange={ (e) => setFiltereddata(e.target.value.toUpperCase())}></input>
              <input type='number' placeholder='cena - od' onChange={ (e) =>setFileredPriceOd(e.target.value)}></input>
              <input type='number' placeholder='cena - do' onChange={ (e) =>setFileredPriceDo(e.target.value)}></input>
              
              {/* <input placeholder='category' onChange={ (e) =>setCategory(e.target.value)}></input> */}
              <select name="select" id="" onChange={ (e) =>setCategory(e.target.value)}>
                <option value="0" >Select category</option>
                <option value="Patelnie">Patelnie</option>
                <option value="Młynki">Młynki</option>
                <option value="Noże">Noże</option>
                <option value="Termosy">Termosy / Kubki</option>
                <option value="Scyzoryki">Scyzoryki</option>
                <option value="Deski">Deski</option>
                <option value="Akcesoria">Akcesoria</option>

              </select>
              <button onClick={handleFilterName}>Zastosuj</button>
              <button onClick={handleReset}>Resetuj</button>

            

        </div>

        <div className='header-product'>
          <h1>Bestsellery </h1>
          <div className='database-product'>
            
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
          <Database koszyk={koszyk} setKoszyk={setKoszyk} setDatabase={setDatabase} database={database} setProduktOpis={setProduktOpis}></Database>
          }

           </div>
          
          <Main></Main>
          <Newsletter></Newsletter>
          <Footer></Footer>
        </div>

    </div>
  )
}

export default Header