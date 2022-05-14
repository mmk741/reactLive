import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit,faFacebook,faYahoo} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
       <footer className='footer'>
           <div className="container">
               <div className="row">
                   <div className="footer-col">
                       <h4>company</h4>
                       <ul>
                           <li><a href="#">Achieve</a></li>
                           <li><a href="#">Brand</a></li>
                           <li><a href="#">Value</a></li>
                       </ul>
                   </div>

                   <div className="footer-col">
                       <h4>company</h4>
                       <ul>
                           <li><a href="#">Achieve</a></li>
                           <li><a href="#">Brand</a></li>
                           <li><a href="#">Value</a></li>
                       </ul>
                   </div>

                   <div className="footer-col">
                       <h4>company</h4>
                       <ul>
                           <li><a href="#">Achieve</a></li>
                           <li><a href="#">Brand</a></li>
                           <li><a href="#">Value</a></li>
                       </ul>
                   </div>

                   <div className="footer-col social-link">
                       <h4>Conract US</h4>
                       
                           <a href="#"> <FontAwesomeIcon icon={faGit}   /></a>
                           <a href="#"> <FontAwesomeIcon icon={faYahoo}   /></a>
                           <a href="#"><FontAwesomeIcon icon={faFacebook}   /></a>
                       
                   </div>
               </div>
           </div>
       </footer>
    </>
  )
}

export default Footer