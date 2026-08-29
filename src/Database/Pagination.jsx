import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Pagination({database ,setDatabase}) {

    const [pagination,setPagiantion] = useState([])

    
   
    useEffect( () =>{

      let pages = []

        for(let i = 0;i<=database.length/4;i++){

                const databasePagination = database
                const minArray = i*4
                const maxArray = minArray+4
                const e1 = databasePagination.slice(minArray,maxArray)

                pagination.push(<button onClick={ () => setDatabase(e1)}>{i}</button>)

            }
    },[])

    

    const paginationAdd = () =>{

      
        const databasePagination = database
        let databaseLength = databasePagination.length

           const mapPag = []


           setPagiantion(mapPag)

          for( let i = 0; i<=databaseLength/4 ; i++){
            const minArray = i*4
            const maxArray = minArray+4
            const e1 = databasePagination.slice(minArray,maxArray)
            mapPag.push( <button onClick={ () => setDatabase(e1)}>{i}</button>)

            if(i ===0){
              setDatabase(database)
            }

            document.querySelector('.header-product').scrollIntoView()

          }

        }
  return (
    <div className='pagination-container'>
         <div className='pagination'>
              <ul>
                {pagination.map( (item,index) =>{
                  return(
                    <li key={index}>
                      <Link>{item}</Link>
                    </li>
                  )
                })}
              </ul>
              <button onClick={paginationAdd}>paginationTest</button>

              <p id='demo'></p>
            </div>

    </div>
  )
}

export default Pagination