import React from 'react'
import restauracja from '../media/restauracja.jpg'


function Horeca() {
  return (
     <section className="dining-section">

      <div>
        <img src={restauracja} alt="" />
      </div>
      <h2>Restauracja i Hotele</h2>

      <p>
        Restauracja to miejsce spotkań, rozmów i wspólnych chwil. Dlatego
        przygotowaliśmy kolekcję akcesoriów, które tworzą wyjątkową atmosferę
        przy każdym posiłku — od codziennych śniadań po eleganckie kolacje.
      </p>

      <p>
        Nasze produkty łączą styl, funkcjonalność i wysoką jakość wykonania.
        Dzięki nim Twoja jadalnia stanie się przestrzenią, w której chętnie
        spędza się czas, a każdy posiłek nabiera wyjątkowego charakteru.
      </p>

      <ul>
        <li>
          <strong>Stylowe nakrycia stołu</strong> — dodają elegancji i podkreślają
          wyjątkowość wspólnych chwil.
        </li>
        <li>
          <strong>Praktyczne akcesoria</strong> — ułatwiają serwowanie i
          organizację posiłków.
        </li>
        <li>
          <strong>Dekoracje jadalniane</strong> — tworzą przytulny i spójny klimat.
        </li>
        <li>
          <strong>Produkty premium</strong> — idealne dla osób ceniących jakość
          i nowoczesny styl.
        </li>
      </ul>

      <div className="cta-box">
        <p>Odkryj akcesoria, które odmienią Twoją jadalnię.</p>
        <a href="#">Zobacz produkty</a>
      </div>
    </section>
  )
}

export default Horeca