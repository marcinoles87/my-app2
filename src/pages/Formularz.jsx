import React, { useState } from 'react'

function Formularz({koszyk,allPrice,setAllPrice}) {

  const [imie,setImie] = useState('')
  const [adres,setAdres] = useState('')
  const [telefon,setTelefon] = useState('')
  const [email,setEmail] = useState('')

  return (
    <div className='formularz-container'>

           <div className='zamowienie-container'>
        <div className='zamowienie-info'>
            
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements' key={index}>
                        <img src={item.img} alt={index} />
                        <p>{item.product}</p>
                        <p>{item.nazwa}</p>
                        <p>Wartość : {item.cena} pln</p>
                    </div>
                )
            })}

            <h3>Podsumowanie : Ilość produktów : {koszyk.length} Wartość zamowienia : {allPrice} PLN</h3>

        </div>

           </div>

           <div className='formularz-klient'>
             <input placeholder='imie'></input>
             <input placeholder='adres dostawy'></input>
             <input placeholder='telefon'></input>
             <input placeholder='email'></input>

             <button>Wyślij</button>
           </div>
    </div>
  )
}

export default Formularz