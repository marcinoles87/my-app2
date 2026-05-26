import React from 'react'

function Zamowienie({koszyk}) {
  return (
    <div className='zamowienie-container'>
        <div className='zamowienie-info'>
            <p>Twoje zamowienie :</p>
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements'>
                        <p>{item.Product}</p>
                        <p>{item.Nazwa}</p>
                        <p>{item.Cena}</p>
                    </div>
                )
            })}
        </div>
        </div>
  )
}

export default Zamowienie