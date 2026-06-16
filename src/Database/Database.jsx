import React, { useEffect, useState } from 'react'

// import logoHeader from '../media/logo_header.png'
import wl1 from '../media/wl1.jpg'
import vi1 from '../media/vi1.jpg'
import gw1 from '../media/gw1.jpg'
import logoHeader from '../media/logoHeader.png'

function Database({koszyk,setKoszyk,setDatabase}) {

    

    const database2 = [
        {
            img:wl1,
            product:'WL H1222020',
            nazwa:'Młynek 12cm',
            cena:'1',
            category:'młynki'

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:'140',
            category:'scyzoryki'

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:'140',
            category:'scyzoryki'

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:'140',
            category:'scyzoryki'

        },
        {
            img:gw1,
            product:'GW SVB-1000',
            nazwa:'Termos 1L',
            cena:'15',
            category:'termosy'

        },
        {
            img:logoHeader,
            product:'SK 1220',
            nazwa:'Patelnio-rondel 20/2',
            cena:'16',
            category:'patelnie'

        },

         {
            img:logoHeader,
            product:'SP 11180',
            nazwa:'Forma okrągła',
            cena:'133',
            category:'formy'

        },
        {
            img:logoHeader,
            product:'WL H122220',
            nazwa:'Młynek 12 cm',
            cena:'14',
            category:'młynki'

        },
       

    

    ]

    useEffect( () =>{
        setDatabase(database2)
    },[])

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