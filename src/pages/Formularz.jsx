import React, { useState } from 'react'

function Formularz({koszyk,allPrice,setAllPrice,setKoszyk}) {

  const [imie,setImie] = useState('')
  const [adres,setAdres] = useState('')
  const [telefon,setTelefon] = useState('')
  const [email,setEmail] = useState('')


  let suma = [...koszyk]

  const handleZamawiam = () =>{
    // alert(`${imie} dostawa ${adres} telefon ${telefon} email ${email} do zapłaty ${allPrice}` )

    const imieForm = document.querySelector('#imie')
    const adresForm = document.querySelector('#adres').value
    const telefonForm = document.querySelector('#telefon').value
    const emailForm = document.querySelector('#email').value

    console.log(imieForm,adresForm,telefonForm,emailForm)

    if(imieForm.value.length < 1){
      alert('za krotkie imie i nazwisko')
      setImie('')
      imieForm.style.borderColor = 'red'
    }else{
      imieForm.style.borderColor = 'black'

    }

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

             <input id='imie' type='text' placeholder='imie i nazwisko' onChange={ (e) =>setImie(e.target.value)}></input>
             <input id='adres' type='text' placeholder='adres dostawy' onChange={ (e) =>setAdres(e.target.value)}></input>
             <input id='telefon' type='number' placeholder='telefon' onChange={ (e) =>setTelefon(e.target.value)}></input>
             <input id='email' type='email' placeholder='email' onChange={ (e) =>setEmail(e.target.value)}></input>

             <button onClick={handleZamawiam}>Zamawiam</button>
           </div>
    </div>
  )
}

export default Formularz