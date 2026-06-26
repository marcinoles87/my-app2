import React from 'react'

function ProduktOpis({produktOpis}) {
    console.log(produktOpis)
  return (
    <div>
        <p>{produktOpis.nazwa}</p>
        {produktOpis.cena}
    </div>
  )
}

export default ProduktOpis