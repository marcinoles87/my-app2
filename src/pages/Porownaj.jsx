import React from 'react'

function Porownaj({porownaj}) {
  return (
    <div className='porownaj-container'>
        {porownaj.map( (item,index) =>{
            return(
                <div className='porownaj-elementy' key={index}>
                {item.nazwa}
                {item.cena}
                <img src={item.img} alt="" />
                </div>
            )
        })}

    </div>
  )
}

export default Porownaj