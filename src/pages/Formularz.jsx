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

          <h3>Zamówione produkty :</h3>
            
            {koszyk.map( (item,index) =>{
                return(
                    <div className='zamowienie-elements' key={index}>
                        <img src={item.img} alt={index} />
                        <p>{item.product} |</p>
                        <p>{item.nazwa} |</p>
                        <p>sztuk 1 |</p>
                        <p>Wartość : {item.cena} pln</p>
                    </div>
                )
            })}


        </div>

           </div>

           <div className='formularz-klient'>
                        <h3>Ilość produktów : {koszyk.length} </h3>
                        <h3>Wartość zamowienia : <span style={{fontSize:'2rem',borderBottom:'2px solid blue'}}>{allPrice}</span> PLN</h3>
                        <h1>Twoje dane do wysyłki</h1>

             <input placeholder='imie i nazwisko' onChange={ (e) =>setImie(e.target.value)}></input>
             <input placeholder='adres dostawy' onChange={ (e) =>setAdres(e.target.value)}></input>
             <input placeholder='telefon' onChange={ (e) =>setTelefon(e.target.value)}></input>
             <input placeholder='email' onChange={ (e) =>setEmail(e.target.value)}></input>

             <button onClick={handleSend}>Wyślij</button>
           </div>
    </div>
  )
}

export default Formularz