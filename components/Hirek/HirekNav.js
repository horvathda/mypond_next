import  { useState } from 'react';
import Link from "next/link"




//import LanguageSelector from './LanguageSelector';




function HirekNav() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
 


  


  return (
    


     <nav>
          
        <div className='hirek_navbar-container'onClick={handleClick} >
     
          <ul className='hirek_nav-links'>

            <li className='hirek_nav-item'>
                <Link 
              exact
              href='./1' 
              activeClassName='hirek_selected'
              className='hirek_nav-links' 
              onClick={closeMobileMenu}>
               1
              </Link>
            </li>
            <li className='hirek_nav-item'>
              <Link 
              href='./2' 
              exact
              activeClassName='hirek_selected'
              className='hirek_nav-links' 
              onClick={closeMobileMenu}>

               2


              </Link>
            </li>
            <li className='hirek_nav-item'>
              <Link 
              href='./3' 
              exact
              activeClassName='hirek_selected'
              className='hirek_nav-links' 
              onClick={closeMobileMenu}>
               3
              </Link>
            </li>
            
          </ul>
     



          

          </div>
      </nav>
     
    
  );
};



export default HirekNav;
