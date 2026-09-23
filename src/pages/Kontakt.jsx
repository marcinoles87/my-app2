import React from 'react'

function Kontakt() {

  const handleSendEmail = (e) =>{
    e.preventDefault()

    const temat = document.querySelector('#temat')
    const email = document.querySelector('#email')
    const wiadomosc = document.querySelector('#wiadomosc')

    if(temat.value.length>3){
      temat.style.backgroundColor = 'red'
    }




  }
  return (
    <div className='kontakt-container'>
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
    </div>
  )
}

export default Kontakt