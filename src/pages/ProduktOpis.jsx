import React from 'react'

function ProduktOpis({produktOpis,setKoszyk}) {

  const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }
    console.log(produktOpis)
  return (
  
    <div className='produkt-opis-container'>
        <div className='database-element'>
                <div className='database-element-img'>
                       <img src={produktOpis.img} alt="" /> 
                </div>
                <div className='database-element-info'>
                        <div className='database-element-info2'>
                            
                            
                        </div>

                </div>
        </div>

        <div className='produkt-opis'>
          <h1>{produktOpis.nazwa}</h1>
          
          <p>Marka : </p>
          <p>Kod produktu : {produktOpis.product}</p>
          <h2 style={{color:'rgb(0,0,190',textDecorationLine:'line-through'}}>Cena regularna : {produktOpis.cena} PLN</h2> 
          <h2 style={{color:'rgb(0,0,190'}}>Nasza cena : {Math.round(produktOpis.cena-(produktOpis.cena*0.20).toFixed(2))} PLN</h2> 
          <p>Opis : {produktOpis.description}</p>
          <button onClick={() => handleAddProduct(produktOpis)}>Dodaj</button>


        </div>
    </div>
 
  )
}

export default ProduktOpis