import React from 'react'

function Porownaj({porownaj}) {
  return (
    <div className='porownaj-container'>
        {porownaj.map( (item,index) =>{
            return(
                <div className='porownaj-elementy' key={index}>
                  <img src={item.img} alt="" />
                <p>{item.nazwa}</p>
                <p>{item.cena}</p>
                
                </div>
            )
        })}

    </div>
  )
}

export default Porownaj