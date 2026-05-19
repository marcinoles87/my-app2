import React, { useState } from 'react'

function Database() {

    const [database,setDatabase] = useState([])

    const database2 = [
        {
            img:'',
            Product:'test1',
            Nazwa:'test1',
            Cena:'14.99'

        },

        {
            img:'',
            Product:'test1',
            Nazwa:'test1',
            Cena:'14.99'

        },

        {
            img:'',
            product:'test1',
            nazwa:'test1',
            cena:'14.99'

        },
        
    ]

  return (
    <div className='database-product'>
        {database2.map( (item,index) => {
            return(
                <div className='database-element' key={index}>
                    <img src="" alt="" />
                    <h3>Produkt</h3>
                    <p>Nazwa</p>
                    <h4>Cena  {item.cena}</h4>


                    </div>
            )
        })}

    </div>
  )
}

export default Database