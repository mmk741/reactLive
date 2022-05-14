import React from 'react'
import './MainHeader.scss'

function MainHeader() {
  return (
    <div className='header'>

   <div className='header__left'>
       <div className='header__left__text'>M.K Travels</div>
   </div>

   <div className='header__right'>
       <button>Sign Up</button>
   </div>

    </div>
  )
}

export default MainHeader