import React from 'react'

function Koszyk({koszyk}) {
  return (
    <div className='koszyk-container'>
        <p>koszyk {koszyk.length}</p>

    </div>
  )
}

export default Koszyk