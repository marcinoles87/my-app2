import React, { useState } from 'react'
import Potwierdzenie from './Potwierdzenie'

function Kontakt() {

  const [potwierdzenie,setPotwierdzenie] = useState(true)

  const handleSendEmail = (e) =>{
    e.preventDefault()

    console.log(potwierdzenie)

    const temat = document.querySelector('#temat')
    const email = document.querySelector('#email')
    const wiadomosc = document.querySelector('#wiadomosc')


    if(temat.value.length<3){
      temat.style.borderColor = 'red'
      temat.placeholder= 'Podaj imie'
    }else{
      temat.style.borderColor = 'black'
    }

    if(email.value.length<2){
      email.style.borderColor = 'red'
      email.placeholder = 'Podaj prawidłowy adres email'
    }else{
      email.style.borderColor = 'black'
    }

    if(wiadomosc.value.length<2){
      wiadomosc.style.borderColor = 'red'
      wiadomosc.placeholder = 'Wiadomosc musi zawierec conajmniej 3 znaki'
    }else{
      wiadomosc.style.borderColor = 'black'
    }

    if(temat.value.length >3 && email.value.length > 3 && wiadomosc.value.length > 3){
      alert('Wszystkie dane poprawne , dziękujemy za złożenie zamówienie . Wkrótce wyślemy potwierdzenie na email !')
      setPotwierdzenie(false)
    }



  }
  return (
    <div className='kontakt-container'>

    {potwierdzenie ?
    <>
      <div className='kontakt-szybki'>
        <h1 style={{fontWeight:'lighter',color:'black'}}>Szybki kontakt</h1>
        <p>whatsup : 22342455</p>
        <p>Napisz do nas :</p>
        <a style={{textDecoration:'none'}} href='mrc87@gmail.com'>mrc87@gmail.com</a>

      </div>

      <div className='kontakt-form'>
        <form>
          <h1>Kontakt z Nami</h1>
          <div className='form-group'>
              <label style={{color:'#212529'}}>Temat</label>
              <input id='temat' type="text" />
          </div>
          <div className='form-group'>
              <label style={{color:'#212529'}}>Email</label>
              <input id='email' type="email" />
          </div>
          <div className='form-group'>
              <label style={{color:'#212529'}}>Wiadomość</label>
              <input id='wiadomosc' type="text" />
          </div>

          <button onClick={handleSendEmail}>Wyślij</button>

        </form>
      </div>
      </>

      : <Potwierdzenie></Potwierdzenie>}
    </div>
  )
}

export default Kontakt