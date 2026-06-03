import React, { useEffect, useState } from 'react'

function Zamowienie({koszyk}) {

    // const [suma,setSuma] = useState('')

const [allPrice,setallPrice] = useState('')

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
            <p>Twoje zamowienie :</p>
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements' key={index}>
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
        <button>Zamawiam</button>

    </div>
        

        </div>
  )
}

export default Zamowienie