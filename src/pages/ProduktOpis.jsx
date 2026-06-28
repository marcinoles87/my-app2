import React from 'react'

function ProduktOpis({produktOpis}) {
    console.log(produktOpis)
  return (
  
    <div>

        
        
        <div className='database-element'>
                <div className='database-element-img'>
                       <img src={produktOpis.img} alt="" /> 
                </div>
                <div className='database-element-info'>
                        <div className='database-element-info2'>
                            <p>{produktOpis.nazwa}</p>
                            <h2 style={{color:'rgb(0,0,190'}}> {produktOpis.cena},00 PLN</h2> 
                        </div>

                </div>
                </div>
    </div>
 
  )
}

export default ProduktOpis