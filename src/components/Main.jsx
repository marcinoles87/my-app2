import React from 'react'
import MainWydarzenie from '../pages/MainWydarzenie'
import {Link} from 'react-router'

function Main() {
  return (
    <div className='main-container'>
      <div className='main-element'>
        <Link to={'/mainWydarzenie'}>Link</Link>
        

      </div>

    </div>
  )
}

export default Main