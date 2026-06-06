import React, { useState } from 'react'

import logoHeader from '../media/logo_header.png'
import wl1 from '../media/wl1.jpg'
import vi1 from '../media/vi1.jpg'
import gw1 from '../media/gw1.jpg'

function Database({koszyk,setKoszyk}) {

    const [database,setDatabase] = useState([])
    

    const database2 = [
        {
            img:wl1,
            product:'KA DM-718',
            nazwa:'Nóz Deba 14 cm',
            cena:'1'

        },
        {
            img:vi1,
            product:'WL E98120',
            nazwa:'Patelnia 28/7 kuta',
            cena:'140'

        },
        {
            img:gw1,
            product:'BR 12-20-12',
            nazwa:'Kosz 12L',
            cena:'15'

        },
        {
            img:logoHeader,
            product:'SK 1220',
            nazwa:'Patelnio-rondel 20/2',
            cena:'16'

        },

         {
            img:logoHeader,
            product:'SP 11180',
            nazwa:'Forma okrągła',
            cena:'133'

        },
        {
            img:logoHeader,
            product:'WL H122220',
            nazwa:'Młynek 12 cm',
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
                        <div className='database-element-info2'>
                            <p>{item.nazwa}</p>
                            <h2 style={{color:'rgb(0,0,190'}}> {item.cena},00 PLN</h2> 
                        </div>
                        
                         <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                    </div>
                    
                   


                    </div>
            )
        })}

    </div>
  )
}

export default Database