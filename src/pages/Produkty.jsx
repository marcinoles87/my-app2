import React from 'react'
import {Link} from 'react-router'

function Produkty({setDatabase,database}) {
  console.log(database)

  const handleAddProduct = (item) =>{
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
                            <h3>{item.nazwa}</h3>
                            <h2 style={{color:'rgb(0,0,190'}}>{Math.round(item.cena-(item.cena*20/100))} zł</h2> 
                            <p style={{padding:'10px 0px'}}>Cena regularna : <span style={{textDecoration:'line-through'}}>{item.cena}</span></p>

                        </div>
                        
                            <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                            {/* <button onClick={() => handlePorownaj(item)} style={{backgroundColor:'rgb(29, 118, 151)'}}>Porównaj</button> */}
                    </div>
                </div>
            )
        })}
    </div>

  )
}

export default Produkty