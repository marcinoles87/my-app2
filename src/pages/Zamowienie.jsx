import React, { useEffect, useState } from 'react'
import { Link , Outlet } from 'react-router'

function Zamowienie({koszyk,allPrice,setallPrice}) {

    // const [suma,setSuma] = useState('')


let suma = [...koszyk]

console.log(suma)

const handleSum = () =>{

        console.log(koszyk)

       setallPrice( suma.reduce( (prev,current) => prev + Number(current.cena) ,0))

       console.log(allPrice)
    

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
                        <p>{item.cena} pln</p>
                    </div>
                )
            })}
        </div>
    
    <div className='zamowienie-podsumowanie'>
        <p>Ilość produktów : {koszyk.length}</p>
        <p className='zamowienie-wartosc'>Wartość zamówienia : {allPrice} pln </p>
        <button onClick={handleSum}>Podsumuj</button>
        <button><Link to={'/formularz'}>Zamawiam</Link></button>

    </div>
        
        </div>

        
  )
}

export default Zamowienie