import React, { useEffect, useState } from 'react'
import { Link , Outlet } from 'react-router'

function Zamowienie({koszyk,allPrice,setallPrice,setKoszyk,kodRabatowy,setKodRabatowy}) {



let suma = [...koszyk]


const handleSum = () =>{


       setallPrice( suma.reduce( (prev,current) => prev + Number(current.cena) ,0).toFixed(2))

}

const handleDeleteItem = (item) =>{
    
    console.log(item)
    
    
    const tablica = suma.filter( (e) => e !== item )
    setKoszyk(tablica)
    
    
}

const handleKodRabatowy = () =>{
    console.log(kodRabatowy)
    console.log(allPrice)
    setallPrice(Math.round(allPrice-Number(allPrice*kodRabatowy/100))) 
    if(kodRabatowy){
      const element =  document.querySelector('#input-kodRabatowy')
      element.style.display = 'none'
      alert('kod rabatowy wykorzystany')
    }
}


  return (
    <div className='zamowienie-container'>
        <div className='zamowienie-info'>
            <p>Twoje zamowienie </p>
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements' key={index}>
                        <img src={item.img} alt={index} />
                        <p>{item.product}</p>
                        <p>{item.nazwa}</p>
                        <p>{Math.round(item.cena-(item.cena*20/100))} pln</p>
                        <button onClick={() => handleDeleteItem(item)}>Usuń</button>


                    </div>
                )
            })}
        </div>
    
    <div className='zamowienie-podsumowanie'>
        <p>Wprowadz kod rabatowy
            <input id='input-kodRabatowy' placeholder='kod rabatowy' onChange={ (e) => setKodRabatowy(e.target.value)}></input>
            <button onClick={handleKodRabatowy}>Potwierdz</button>
            </p>
        <p>Ilość produktów : {koszyk.length}</p>
        <p className='zamowienie-wartosc'>Wartość zamówienia : {Math.round(allPrice-(allPrice*20/100))} pln </p>
        <button onClick={handleSum}>Podsumuj</button>
        <button><Link to={'/formularz'}>Zamawiam</Link></button>

    </div>
        
        </div>

        
  )
}

export default Zamowienie