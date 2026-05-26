import React from 'react'

function Zamowienie({koszyk}) {

let sumaZamowienia = koszyk.reduce( (suma,item) =>{
    return suma+item
})
  return (
    <div className='zamowienie-container'>
        <div className='zamowienie-info'>
            <p>Twoje zamowienie :</p>
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements'>
                        <p>{item.product}</p>
                        <p>{item.nazwa}</p>
                        <p>{item.cena}</p>
                    </div>
                )
            })}
        </div>

        <p>Ilość produktów : {koszyk.length}</p>
        <p>Wartość zamówienia : {sumaZamowienia} </p>
        </div>
  )
}

export default Zamowienie