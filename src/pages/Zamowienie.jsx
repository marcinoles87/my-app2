import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router'

function Zamowienie({koszyk,allPrice,setallPrice,setKoszyk,kodRabatowy,setKodRabatowy}) {

const [wartoscZamowienia , setWartoscZamowienia] = useState('')
const [zamawiamFlag , setZamawiamFlag] = useState(false)

    let wartosc = Math.round(allPrice-(allPrice*20/100)).toFixed(2)



    let suma = [...koszyk]



const handleSum = () =>{


       setallPrice( suma.reduce( (prev,current) => prev + Number(current.cena) ,0).toFixed(2))
       setZamawiamFlag(true)

}

const handleAddItem = (item) =>{
    setKoszyk([...koszyk,item])
}

const handleDeleteItem = (item,index) =>{ 
    let deleteElement =koszyk.splice(index,1)
    console.log(deleteElement)
    const tablica = suma.filter( (e) => e !== deleteElement )
    console.log(index)
    console.log(tablica)
    setKoszyk(tablica)
    
}

const handleKodRabatowy = () =>{
    
    setallPrice(Math.round(allPrice-Number(allPrice*kodRabatowy/100))) 
    if(kodRabatowy){
      const element =  document.querySelector('#input-kodRabatowy')
      const buttonZamawiam =  document.querySelector('#podsumuj')
      const buttonPotwierdz =  document.querySelector('#potwierdzRabat')
      element.style.display = 'none'
      buttonZamawiam.style.display = 'none'
      buttonPotwierdz.style.display = 'none'
      alert('kod rabatowy wykorzystany')
    }
}

const handleZamawiam = () =>{
    setZamawiamFlag(false)
}


  return (
    <div className='zamowienie-container'>
        <div className='zamowienie-info'>
            <p>Twoje zamowienie </p>
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements' key={index}>
                        <img src={item.img} alt={index} />
                        {/* <p>{item.product}</p> */}
                        <p>{item.nazwa}</p>
                        <p>{Math.round(item.cena-(item.cena*20/100))} pln</p>
                        <button onClick={() => handleDeleteItem(item,index)}>-</button>
                        <button onClick={() => handleAddItem(item)}>+</button>


                    </div>
                )
            })}
        </div>
    
    <div className='zamowienie-podsumowanie'>
        <p>Wprowadz kod rabatowy
            <input id='input-kodRabatowy' placeholder='kod rabatowy' onChange={ (e) => setKodRabatowy(e.target.value)}></input>
            <button id='potwierdzRabat' onClick={handleKodRabatowy}>Potwierdz</button>
            </p>
        <p>Ilość produktów : {koszyk.length}</p>
        <p className='zamowienie-wartosc'>Wartość zamówienia : {Math.round(allPrice-(allPrice*20/100)).toFixed(2)} pln </p>
         {zamawiamFlag ?  '':<button id='podsumuj' onClick={handleSum}>Podsumuj</button>  }
        {zamawiamFlag ? <button onClick={handleZamawiam}><Link to={'/formularz'}>Zamawiam</Link></button> : ''}
        

    </div>
        
        </div>

        
  )
}

export default Zamowienie