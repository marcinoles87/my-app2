import React from 'react'

import łazienka from '../media/łazienka.jpg'

function Łazienka() {
  return (
        <section className="bathroom-section">
          <div>
            <img  src={łazienka} alt="" />
          </div>
      <h2>Łazienka</h2>

      <p>
        Łazienka to przestrzeń, w której liczy się komfort, porządek i styl.
        Dlatego przygotowaliśmy kolekcję akcesoriów, które pomagają stworzyć
        funkcjonalne i eleganckie wnętrze — niezależnie od tego, czy urządzasz
        małą łazienkę, czy przestronny pokój kąpielowy.
      </p>

      <p>
        Nasze produkty łączą nowoczesny design, trwałe materiały i praktyczne
        rozwiązania, które ułatwiają codzienne rytuały. Od organizacji kosmetyków,
        przez akcesoria do pielęgnacji, aż po dodatki tworzące wyjątkowy klimat —
        tutaj znajdziesz wszystko, czego potrzebujesz.
      </p>

      <ul>
        <li>
          <strong>Praktyczne organizery łazienkowe</strong> — pomagają utrzymać
          porządek i wygodę.
        </li>
        <li>
          <strong>Stylowe dodatki</strong> — tworzą spójny i elegancki wygląd
          wnętrza.
        </li>
        <li>
          <strong>Akcesoria do pielęgnacji</strong> — podnoszą komfort codziennych
          rytuałów.
        </li>
        <li>
          <strong>Produkty premium</strong> — idealne dla osób ceniących jakość
          i nowoczesny styl.
        </li>
      </ul>

      <div className="cta-box">
        <p>Odkryj akcesoria, które odmienią Twoją łazienkę.</p>
        <a href="#">Zobacz produkty</a>
      </div>
    </section>
  )
}

export default Łazienka