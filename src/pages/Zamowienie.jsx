import React, { useEffect, useState } from 'react'

function Zamowienie({koszyk}) {

    // const [suma,setSuma] = useState('')

const [allPrice,setallPrice] = useState([])

const suma = [...koszyk]



const handleSum = () =>{

        const sumaZamowienia =  koszyk.reduce( (prev,current) => prev+current.cena,0 )

        return <h1>{sumaZamowienia}</h1>


       


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
        <p>Wartość zamówienia : {allPrice} </p>
        <button onClick={handleSum}>Podsumuj</button>
        <button>Zamawiam</button>

        </div>
  )
}

export default Zamowienie