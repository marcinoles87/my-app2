import React, { useState } from 'react'

function Formularz({koszyk,allPrice,setAllPrice}) {

  const [imie,setImie] = useState('')
  const [adres,setAdres] = useState('')
  const [telefon,setTelefon] = useState('')
  const [email,setEmail] = useState('')

  const handleSend = () =>{
    alert(`${imie} dostawa ${adres} telefon ${telefon} email ${email} do zapłaty ${allPrice}` )

  }

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

            <h3>Podsumowanie : Ilość produktów : {koszyk.length} Wartość zamowienia : <span style={{fontSize:'2rem',borderBottom:'2px solid blue'}}>{allPrice}</span> PLN</h3>

        </div>

           </div>

           <div className='formularz-klient'>
             <input placeholder='imie' onChange={ (e) =>setImie(e.target.value)}></input>
             <input placeholder='adres dostawy' onChange={ (e) =>setAdres(e.target.value)}></input>
             <input placeholder='telefon' onChange={ (e) =>setTelefon(e.target.value)}></input>
             <input placeholder='email' onChange={ (e) =>setEmail(e.target.value)}></input>

             <button onClick={handleSend}>Wyślij</button>
           </div>
    </div>
  )
}

export default Formularz