import React, { useState } from 'react'

function Zamowienie({koszyk}) {

    const [suma,setSuma] = useState('')

const [allPrice,setallPrice] = useState([])

if(koszyk){

    setallPrice( )
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
                        <p>{item.cena}</p>
                    </div>
                )
            })}
        </div>

        <p>Ilość produktów : {koszyk.length}</p>
        <p>Wartość zamówienia :  </p>
        <button>Zamawiam</button>
        </div>
  )
}

export default Zamowienie