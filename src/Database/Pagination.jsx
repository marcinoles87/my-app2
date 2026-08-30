import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Pagination({database ,setDatabase}) {

    const [pagination,setPagiantion] = useState([])
    const [pages,setPages] = useState([])
    const [flag,setFlag] = useState(true)

   


    const paginationFun = (item) =>{
      console.log(item)
      setDatabase(item)
      setPages([])


    }
   
    if(flag){
      for(let i = 0;i<=database.length/4;i++){
       const databasePagination = database
        const minArray = i*4
        const maxArray = minArray+4
        const e1 = databasePagination.slice(minArray,maxArray)
        const maxPages = Math.ceil(database.length/5)
        console.log(maxPages)
        console.log(e1)
       pages.push(<button onClick={ () => paginationFun(e1)}>{i}</button>)
    }
    }else{
      return ''
    }
    

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

          }

        }
  return (
    <div className='pagination-container'>
         <div className='pagination'>
              <ul>
                {pages.map( (item,index) =>{
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