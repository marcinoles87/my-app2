import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Pagination({database ,setDatabase}) {

    const [pagination,setPagiantion] = useState([])

    


    const paginationFun = () =>{


      for(let i = 0 ; i<database.length/4;i++){

          const databasePagination = [...database]
          const min = i*4
          const max = min + 4
          const e1 = databasePagination.slice(min,max)
          let elementPag =  document.createElement('button')
          elementPag.textContent = i
          document.querySelector('#pag').appendChild(elementPag).addEventListener('click' , () => setDatabase(e1) )
          if(i===4){
            console.log('ostatni')
            let elementPag =  document.createElement('button')
          elementPag.textContent = 'all'
          document.querySelector('#pag').appendChild(elementPag).addEventListener('click' , () => setDatabase(database) )
          const buttonPag = document.querySelector('#pag-button')
          buttonPag.style.visibility = 'hidden'
          }
    }
    }
      
      

    // const paginationAdd = () =>{

      
    //     const databasePagination = database
    //     let databaseLength = databasePagination.length

    //        const mapPag = []


    //        setPagiantion(mapPag)

    //       for( let i = 0; i<=databaseLength/4 ; i++){
    //         const minArray = i*4
    //         const maxArray = minArray+4
    //         const e1 = databasePagination.slice(minArray,maxArray)
    //         mapPag.push( <button onClick={ () => setDatabase(e1)}>{i}</button>)

    //         if(i ===0){
    //           setDatabase(database)
    //         }

    //       }

    //     }
  return (
    <div className='pagination-container'>
         <div className='pagination'>
              
              <button id='pag-button' onClick={paginationFun}>paginationTest</button>

                      <div id='pag'></div>

            </div>

    </div>
  )
}

export default Pagination