import React from 'react'

import kuchnia from '../media/kuchnia.jpg'

function Kuchnia() {
  return (
    <div className='kuchania-container'>
      <div className='kuchnia-img'>
        <img src={kuchnia} alt="" />
      </div>
      <div className='kuchania-opis'>
        <section className="kitchen-section">
      <h2>Sekcja Kuchnia</h2>

      <p>
        Twoja kuchnia zasługuje na akcesoria, które nie tylko świetnie wyglądają,
        ale przede wszystkim ułatwiają codzienne gotowanie. W tej kategorii
        znajdziesz produkty stworzone po to, by oszczędzać Twój czas, zwiększać
        wygodę i dodawać elegancji każdemu posiłkowi.
      </p>

      <p>
        Nasze akcesoria to połączenie wysokiej jakości materiałów, przemyślanego
        designu i funkcjonalności, której potrzebujesz na co dzień. Niezależnie
        od tego, czy przygotowujesz szybkie śniadanie, rodzinny obiad czy kolację
        dla gości — tutaj znajdziesz narzędzia, które sprawią, że gotowanie stanie
        się prostsze, szybsze i bardziej satysfakcjonujące.
      </p>

      <ul>
        <li>
          <strong>Niezawodne narzędzia kuchenne</strong> — usprawniają każdy etap
          przygotowywania potraw.
        </li>
        <li>
          <strong>Stylowe dodatki</strong> — podkreślają charakter Twojej kuchni.
        </li>
        <li>
          <strong>Praktyczne organizery</strong> — pomagają utrzymać porządek bez
          wysiłku.
        </li>
        <li>
          <strong>Akcesoria premium</strong> — idealne dla wymagających miłośników
          gotowania.
        </li>
      </ul>

      <div className="cta-box">
        <p>Odkryj akcesoria, które zmienią sposób, w jaki gotujesz.</p>
        <a href="#">Zobacz produkty</a>
      </div>
    </section>
      </div>

    </div>
  )
}

export default Kuchnia