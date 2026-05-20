import React from 'react'

function Wysyłka() {
  return (
    <div className='wysylka-container'>

      <div className='wysylka-header'>
        <h2 style={{color:'#2727c4'}}>Dostawa</h2>
        <h3 style={{color:'#333399'}}>Dostawa powyżej 250 zł - gratis !</h3>
      </div>

      <div className='wysylka-info'>
        <p><span style={{color:'#333399'}}>Dostawa zam&oacute;wionego towaru zostanie zrealizowana tylko wtedy, kiedy zamawiany towar znajduje się fizycznie na stanach magazynu</span></p>
          <div>&nbsp;</div>
          <div>Przedmiot zam&oacute;wienia może być dostarczony do Klienta w&nbsp;zależności od jego wyboru:</div>
          <div>a) na adres wskazany przez Klienta w&nbsp;zam&oacute;wieniu. Towar dostarczany jest przez Firmę kurierską FEDEX / DPD</div>
          <div>b) do wybranego Paczkomatu firmy Inpost.</div>
          <div>&nbsp;</div>
          <p><strong>Aktualny cennik przesyłek kurierskich</strong>&nbsp;jest następujący:</p>
          <div>a) <strong>17 zł</strong>&nbsp;płatne przelewem</div>
          <div>b) <strong>18</strong>&nbsp;<strong>zł</strong>&nbsp;w&nbsp;przypadku opcji dostawy &bdquo;Za pobraniem&rdquo;</div>
                </div>
    </div>
  )
}

export default Wysyłka