import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Pagination({database ,setDatabase}) {

    const [pagination,setPagiantion] = useState([])
    
    console.log(database)
    console.log(setDatabase)



    const paginationAdd = () =>{

      
        const databasePagination = database
        let databaseLength = databasePagination.length
        console.log(databasePagination)

                const p1 = databasePagination.slice(0,4)
                const p2 = databasePagination.slice(4,8)
                const p3 = databasePagination.slice(8,12)
                const p4 = databasePagination.slice(12,17)


          
           const mapPag = []


           setPagiantion(mapPag)

          for( let i = 0; i<=databaseLength/4 ; i++){
            const minArray = i*4
            const maxArray = minArray+4
            const e1 = databasePagination.slice(minArray,maxArray)
            console.log(e1)
            mapPag.push( <button onClick={ () => setDatabase(e1)}>{i}</button>)
            console.log(mapPag)

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