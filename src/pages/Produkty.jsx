import React from 'react'
import {Link} from 'react-router'

function Produkty({setDatabase,database,setKoszyk}) {

  const handleAddProduct = (item) =>{
            setKoszyk( prev =>[...prev,item])

  }


    
  return (

    <div className='database-product'>
         {database.map( (item,index) => {
            return(
                <div className='database-element' key={index}>
                    <div className='database-element-img'>
                       <Link to={'produktOpis'}  ><img src={item.img} alt="" /> </Link>
                       
                    </div>
                    <div className='database-element-info'>
                        <div className='database-element-info2'>
                            <h3>{item.nazwa.slice(0,17)+` ...`}</h3>
                            <h2 style={{color:'rgb(0,0,190'}}>{Math.round(item.cena-(item.cena*20/100))} zł</h2> 
                            <p style={{padding:'10px 0px'}}>Cena regularna : <span style={{textDecoration:'line-through'}}>{item.cena}</span></p>

                        </div>
                        
                            <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                    </div>
                </div>
            )
        })}
    </div>

  )
}

export default Produkty