import React, { useState } from 'react'

import logoHeader from '../media/logo_header.png'

function Database({koszyk,setKoszyk}) {

    const [database,setDatabase] = useState([])
    

    const database2 = [
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'1'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'14'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'15'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'16'

        },

         {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'1'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'14'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'15'

        },
        {
            img:logoHeader,
            product:'test1',
            nazwa:'test1',
            cena:'16'

        },

    

    ]

    const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }

  return (
    <div className='database-product'>
        {database2.map( (item,index) => {
            return(
                <div className='database-element' key={index}>
                    <div className='database-element-img'>
                       <img src={item.img} alt="" /> 
                    </div>
                    <div className='database-element-info'>
                         <h3>Produkt</h3>
                         <p>Nazwa</p>
                         <h4>Cena  {item.cena}</h4>
                         <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                    </div>
                    
                   


                    </div>
            )
        })}

    </div>
  )
}

export default Database