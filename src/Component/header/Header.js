import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faCaretRight,faXmark,faBars } from '@fortawesome/free-solid-svg-icons'


import './header.scss'



function Header() {
  

  const [toggleSideBar, setToggleSideBar] = useState(0)

  const handleClick=()=>{
    setToggleSideBar(prevVal=>1-prevVal);
  }
 
  return (

    <>
    <header>
      <a href="#" className='logo'>logo</a>
      <div className='navigation'>
        <ul  className={`menu ${toggleSideBar==1?' menu--active':'' } `} >
        <div className='close-btn ' onClick={handleClick}><FontAwesomeIcon icon={faXmark} size='4x' color='white'  /></div>
        <li className="menu-item"> <a href="#">Home</a> </li>
        <li className="menu-item"><a className='dropdown' href="#">Dropdown <FontAwesomeIcon icon={faCaretDown} /> </a>
        
        <ul className='sub-menu'>
        <li className="sub-menu-item"> <a href="#">item 1</a></li>
        <li className="sub-menu-item"> <a href="#">item 2</a></li>
        <li className="sub-menu-item"> <a href="#">item 3</a></li>

        </ul>
        </li>
        <li className="menu-item"><a className='dropdown' href="#">Nested Dropdown <FontAwesomeIcon icon={faCaretDown} /></a>
       
        <ul className='sub-menu'>
        <li className="sub-menu-item"> <a href="#">item 1</a></li>
        <li className="sub-menu-item"> <a href="#">item 2</a></li>
        <li className="sub-menu-item"> <a href="#">item 3</a></li>
        <li className="sub-menu-item "> <a className='dropdown' href="#">child <FontAwesomeIcon icon={faCaretRight} /> </a>
        
        <ul className='sub-menu-child'>
        <li className="sub-menu-child-item"> <a href="#">item 1</a></li>
        <li className="sub-menu-child-item"> <a href="#">item 2</a></li>
        <li className="sub-menu-child-item"> <a href="#">item 3</a></li>
        </ul>

        </li>

        </ul>
        
        </li>
        <li className="menu-item"><a href="#">Service</a></li>
        <li className="menu-item"><a href="#">Contact Us</a></li>

        </ul>
      </div>
      <div className='menu-btn' onClick={handleClick}><FontAwesomeIcon icon={faBars} size='4x' color='white'  /></div>
    </header>


   
 
 
  </>
  )
}

export default Header