import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Pagination({database ,setDatabase}) {

    const [pagination,setPagiantion] = useState([])
    const [flag,setFlag] = useState(true)
    const [old,setOld] = useState([])

    
  const newArray = database
   
  const pages = []

    const paginationFun = (item) =>{
      setDatabase(item)
      if(item.length<1){
        setDatabase(database)
      }

      }
      
    
        const databasePagination = [...database]
        const e1 = databasePagination.toSpliced(0,4)
        const e2 = databasePagination.toSpliced(5,8)
        const e3 = databasePagination.toSpliced(9,12)
        const e4 = databasePagination.toSpliced(13,16)
        const e5 = databasePagination.toSpliced(17,19)
       pages.push(<button onClick={ () => paginationFun(e1)}>{1}</button>)
       pages.push(<button onClick={ () => paginationFun(e2)}>{2}</button>)
       pages.push(<button onClick={ () => paginationFun(e3)}>{3}</button>)
       pages.push(<button onClick={ () => paginationFun(e4)}>{4}</button>)
       pages.push(<button onClick={ () => paginationFun(e5)}>{5}</button>)

    
    

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