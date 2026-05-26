import React from 'react'

function Zamowienie({koszyk}) {
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

        <p>Podsumowanie :</p>
        </div>
  )
}

export default Zamowienie