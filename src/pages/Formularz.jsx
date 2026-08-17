import React, { useState } from 'react'

function Formularz({koszyk,allPrice,setAllPrice,setKoszyk,kodRabatowy}) {

  const [imie,setImie] = useState('')
  const [adres,setAdres] = useState('')
  const [telefon,setTelefon] = useState('')
  const [email,setEmail] = useState('')


  let suma = [...koszyk]

  const handleZamawiam = (e) =>{
    e.preventDefault();

    const imieForm = document.querySelector('#imie')
    const adresForm = document.querySelector('#adres')
    const telefonForm = document.querySelector('#telefon')
    const emailForm = document.querySelector('#email')

    console.log(imieForm,adresForm,telefonForm,emailForm)

    if(imieForm.value.length < 1){
      alert('za krotkie imie i nazwisko')
      setImie('')
      imieForm.style.borderColor = 'red'
    }else{
      imieForm.style.borderColor = 'black'

    }

    if(adresForm.value.length < 1){
      alert('za krotki adres')
      setImie('')
      adresForm.style.borderColor = 'red'
    }else{
      adresForm.style.borderColor = 'black'

    }

    if(telefonForm.value.length < 8){
      alert('nieprawidłowy numer')
      setImie('')
      telefonForm.style.borderColor = 'red'
    }else{
      telefonForm.style.borderColor = 'black'

    }

    if(emailForm.value.length < 1){
      alert('za krotki adres email')
      setImie('')
      emailForm.style.borderColor = 'red'
    }else{
      emailForm.style.borderColor = 'black'

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
                        <p>Wartość : {Math.round(item.cena-(item.cena*20/100))} pln</p>

                    </div>
                )
            })}


        </div>

           </div>

           <div className='formularz-klient'>
                        <h3>Ilość produktów : {koszyk.length} </h3>
                        <h3>Wartość zamowienia : <span style={{fontSize:'2rem',borderBottom:'2px solid blue'}}>{Math.round(allPrice-(allPrice*20/100)).toFixed(2)}</span> PLN</h3>
                        <h3>Łączny Rabat: <span style={{fontSize:'2rem',borderBottom:'2px solid blue'}}>{(allPrice-(allPrice-allPrice*20/100)+(allPrice*kodRabatowy/100)).toFixed(2)}</span> PLN</h3>
                        <h3>Kod rabatowy: <span style={{fontSize:'2rem',borderBottom:'2px solid blue'}}>{kodRabatowy} %</span></h3>
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