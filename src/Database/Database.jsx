import React, { useEffect } from 'react'

// import logoHeader from '../media/logo_header.png'
import wl1 from '../media/wl1.jpg'
import vi1 from '../media/vi1.jpg'
import gw1 from '../media/gw1.jpg'
import skk1 from '../media/skk1.jpg'
import ht1 from '../media/ht1.jpg'
import logoHeader from '../media/logoHeader.png'
import kai from '../media/kai1.jpg'
import deska1 from '../media/deska1.webp'
import łopatka1 from '../media/łopatka1.jpg'
import chlebak1 from '../media/chlebak1.jpg'

import { Link } from 'react-router'
function Database({koszyk,setKoszyk,setDatabase,database,setProduktOpis,porownaj,setPorownaj}) {

    


const database2 = [

   {
    img: chlebak1,
    product: "K001",
    nazwa: "Deska bambusowa",
    cena: 49.99,
    category: "Chlebak",
    description: "Wytrzymała deska bambusowa odporna na wilgoć i zarysowania."
  },
  {
    img: deska1,
    product: "K001",
    nazwa: "Deska bambusowa",
    cena: 49.99,
    category: "Deski",
    description: "Wytrzymała deska bambusowa odporna na wilgoć i zarysowania."
  },
  {
    img:kai,
    product: "K002",
    nazwa: "Nóż szefa kuchni 20 cm",
    cena: 129.99,
    category: "Noże",
    description: "Profesjonalny nóż ze stali nierdzewnej o ergonomicznym uchwycie."
  },
  {
    img: kai,
    product: "K003",
    nazwa: "Zestaw noży Kai 5 elementów",
    cena: 249.99,
    category: "Noże",
    description: "Komplet pięciu noży kuchennych z drewnianym stojakiem."
  },
  {
    img: skk1,
    product: "K004",
    nazwa: "Patelnia nieprzywierająca 28 cm",
    cena: 159.99,
    category: "Patelnie",
    description: "Patelnia z powłoką non-stick, idealna do codziennego gotowania."
  },
  {
    img: ht1,
    product: "K005",
    nazwa: "Garnek stalowy 5 l",
    cena: 189.99,
    category: "Garnki",
    description: "Garnek wykonany ze stali nierdzewnej z pokrywką."
  },
  {
    img: łopatka1,
    product: "K006",
    nazwa: "Trzepaczka silikonowa",
    cena: 24.99,
    category: "Akcesoria",
    description: "Elastyczna trzepaczka bezpieczna dla naczyń z powłoką."
  },
  {
    img: łopatka1,
    product: "K007",
    nazwa: "Łopatka silikonowa",
    cena: 19.99,
    category: "Akcesoria",
    description: "Odporna na wysokie temperatury łopatka do smażenia."
  },
  {
    img: vi1,
    product: "K008",
    nazwa: "Scyzoryk Huntsman",
    cena: 34.99,
    category: "Scyzoryki",
    description: "Solidna chochla wykonana ze stali nierdzewnej."
  },
  {
    img: skk1,
    product: "K009",
    nazwa: "Patelnia Tytanowa Skk 20/4",
    cena: 54.99,
    category: "Patelnie",
    description: "Duży durszlak z wygodnymi uchwytami."
  },
  {
    img: gw1,
    product: "K010",
    nazwa: "Termos 0,5 L",
    cena: 39.99,
    category: "Miski",
    description: "Uniwersalna miska do przygotowywania potraw."
  },
  {
    img: kai,
    product: "K011",
    nazwa: "Noż Kai 20cm Yanagiba",
    cena: 44.99,
    category: "Akcesoria",
    description: "Tarka z czterema rodzajami ostrzy do warzyw i sera."
  },
  {
    img: vi1,
    product: "K012",
    nazwa: "Obieraczka do warzyw",
    cena: 18.99,
    category: "Scyzoryki",
    description: "Ostra obieraczka z ergonomicznym uchwytem."
  },
  {
    img: wl1,
    product: "K013",
    nazwa: "młynek rex",
    cena: 79.99,
    category: "Młynki",
    description: "Precyzyjna waga z wyświetlaczem LCD do 5 kg."
  },
 

 
  {
    img:gw1,
    product: "K018",
    nazwa: "Inne",
    cena: 22.99,
    category: "Termosy",
    description: "Gruba rękawica chroniąca przed wysoką temperaturą."
  },
  {
    img:gw1,
    product: "K019",
    nazwa: "Termos 1L ",
    cena: 29.99,
    category: "Termosy",
    description: "Stalowy zaparzacz do herbat liściastych."
  },
  {
    img: wl1,
    product: "K020",
    nazwa: "Młynek Hoxton",
    cena: 59.99,
    category: "Młynki",
    description: "Ceramiczny mechanizm mielenia z regulacją grubości."
  }
];


    useEffect( () =>{
        setDatabase(database2)
        
    },[])

    const handleAddProduct = (item) =>{

        setKoszyk( prev =>[...prev,item])

    }

    const handlePorownaj = (item) =>{

      setPorownaj( prev =>[...prev,item])

      if(porownaj.length > 4){
        setPorownaj([])
        alert('za dużo elementów do porównania max.ilość 5')
      }

    }

    const paginationAdd = () =>{

      console.log('w srodku')
    
        const databasePagination = database2
        let databaseLength = databasePagination.length

        const newArrays = []
          
          const p1 = databasePagination.slice(0,4)
          const p2 = databasePagination.slice(4,8)
          const p3 = databasePagination.slice(8,12)
          const p4 = databasePagination.slice(12,17)

          for( let i = 0; i<=databaseLength/4 ; i++){
            const minArray = i*4
            const maxArray = minArray+4
            const e1 = databasePagination.slice(minArray,maxArray)

            let text = ''
            text += i
            console.log(text)

           const button = document.createElement('button')
           button.textContent = text
           console.log(button)
          //  document.getElementById("demo").innerHTML = button;
           document.getElementById('demo').appendChild(button);


            console.log(e1)
            


          }
          
        



        }


  return (
    <>

      <div className='pagination'>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <button onClick={paginationAdd}>paginationTest</button>

              <p id='demo'></p>
            </div>


        {database.map( (item,index) => {
            return(
                <div className='database-element' key={index}>
                    <div className='database-element-img'>
                       <Link to={'produktOpis'}  onClick={ () =>setProduktOpis(item) }><img src={item.img} alt="" /> </Link>
                       
                    </div>
                    <div className='database-element-info'>
                        <div className='database-element-info2'>
                            <p>{item.nazwa}</p>
                            <h2 style={{color:'rgb(0,0,190'}}>{Math.round(item.cena-(item.cena*20/100))} zł</h2> 
                            <p style={{padding:'10px 0px'}}>Cena regularna : <span style={{textDecoration:'line-through'}}>{item.cena}</span></p>
                        </div>
                        
                         <button onClick={() => handleAddProduct(item)}>Dodaj</button>
                         <button onClick={() => handlePorownaj(item)} style={{backgroundColor:'greenyellow'}}>Porównaj</button>
                    </div>
                </div>
            )
        })}

        </>

  )
}

export default Database