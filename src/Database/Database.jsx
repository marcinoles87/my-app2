import React, { useEffect, useState } from 'react'

// import logoHeader from '../media/logo_header.png'
import wl1 from '../media/wl1.jpg'
import vi1 from '../media/vi1.jpg'
import gw1 from '../media/gw1.jpg'
import skk1 from '../media/skk1.jpg'
import logoHeader from '../media/logoHeader.png'
import kai from '../media/kai.webp'
import ProduktOpis from '../pages/ProduktOpis'
import { Link } from 'react-router'
function Database({koszyk,setKoszyk,setDatabase,setProduktOpis}) {

    

    const database2 = [
        {
            img:wl1,
            product:'WL H1222020',
            nazwa:'Młynek 12cm',
            cena:1,
            category:'młynki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:140,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:140,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:160,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:gw1,
            product:'GW SVB-1000',
            nazwa:'Termos 1L',
            cena:89,
            category:'termosy',
            cenaRegularna :199,

        },
        {
            img:skk1,
            product:'SK 1220',
            nazwa:'Patelnio-rondel 20/2',
            cena:529,
            category:'patelnie',
            cenaRegularna :199,

        },

         {
            img:logoHeader,
            product:'SP 11180',
            nazwa:'Forma okrągła',
            cena:159,
            category:'formy',
            cenaRegularna :199,

        },
        {
            img:kai,
            product:'KA DM 777',
            nazwa:'Noż 12 cm',
            cena:99,
            category:'noże',
            cenaRegularna :199,

        },
       
        {
            img:wl1,
            product:'WL H1222020',
            nazwa:'Młynek 12cm',
            cena:129,
            category:'młynki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:199,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:229,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:vi1,
            product:'VI 0.3303',
            nazwa:'Scyroryk Hunt',
            cena:140,
            category:'scyzoryki',
            cenaRegularna :199,

        },
        {
            img:gw1,
            product:'GW SVB-1000',
            nazwa:'Termos 1L',
            cena:16,
            category:'termosy',
            cenaRegularna :199,

        },
        {
            img:skk1,
            product:'SK 1220',
            nazwa:'Patelnio-rondel 20/2',
            cena:129,
            category:'patelnie',
            cenaRegularna :199,

        },

         {
            img:logoHeader,
            product:'SP 11180',
            nazwa:'Forma okrągła',
            cena:55,
            category:'formy',
            cenaRegularna :199,

        },
        {
            img:kai,
            product:'KA DM 777',
            nazwa:'Noż 23 cm',
            cena:220,
            category:'noże',
            cenaRegularna :199,

        },
       

    

    ]

    useEffect( () =>{
        setDatabase(database2)
    },[])

    const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }

  return (
    <>
        {database2.map( (item,index) => {
            return(
                <div className='database-element' key={index}>
                    <div className='database-element-img'>
                       <Link to={'produktOpis'}  onClick={ () =>setProduktOpis(item) }>sw</Link>
                       <img src={item.img} alt="" /> 
                    </div>
                    <div className='database-element-info'>
                        <div className='database-element-info2'>
                            <p>{item.nazwa}</p>
                            <h2 style={{color:'rgb(0,0,190'}}>{item.cena},00 zł</h2> 
                            <p style={{padding:'10px 0px'}}>Cena regularna : <span style={{textDecoration:'line-through'}}>{item.cenaRegularna},00 zł</span></p>
                        </div>
                        
                         <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                    </div>
                </div>
            )
        })}

        </>

  )
}

export default Database