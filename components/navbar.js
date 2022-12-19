import { useState} from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'



const  Navbar =()=> {
    let router = useRouter();

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
   
    let { t } = useTranslation();
  
        
          return (

            <>
            <Head>
            <link rel="foo" href="bar" />
            </Head>

  
       <nav className='navbar' style={{backgroundImage:'url("/images/navbar_bg.png")'}}>
            
          <div className='navbar-container' >
            {/*
          <img src="/images/navbar_bg.png" alt="navbar_image" className="header_image" />
        */}
  
            <Link href='/' className='navbar__logo' onClick={closeMobileMenu}>
          
                <img className ="navbar__logo " src="/images/logo.png" alt="MyPond logo" />
            </Link>

            <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />

              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className="header_right-side">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  
              <li className='nav-item'>
                  <Link 
                href={t('translation:nav_kerdoiv')}
                activeClassName='selected'
                className='nav-links' 
                onClick={closeMobileMenu}>
                  {t("translation:menu1")}
                </Link>
              </li>
              <li className='nav-item'>
                <Link 
                href='/mintavetel' 
                exact="true"
                activeClassName='selected'
                className='nav-links' 
                onClick={closeMobileMenu}>
  
                  {t("translation:menu2")}
  
  
                </Link>
              </li>
              <li className='nav-item'>
                <Link 
                href='/hirek/1' 
                exact="true"
                activeClassName='selected'
                className='nav-links' 
                onClick={closeMobileMenu}>
                  {t("translation:menu3")}
                </Link>
              </li>
              <li className='nav-item'>
              <Link
                  exact="true" href='/kisokos'
                  activeClassName='selected'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                  {t("translation:menu4")}
                </Link>
              </li>
              <li className='nav-item'>
              <Link
                  exact="true" href='/celunk'
                  activeClassName='selected'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                  {t("translation:menu5")}
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  exact="true" href='/eredmenyek'
                  activeClassName='selected'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                  {t("translation:menu6")}
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  exact="true" href='/rolunk'
                  activeClassName='selected'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                  {t("translation:menu7")}
                </Link>
              </li>
              
  
              
              <li className='nav-item'>
                <Link
                  exact="true" href='/kapcsolat'
                  activeClassName='selected'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  
                  >
                  {t("translation:menu8")}
                </Link>
              </li>
            </ul>
            <ul className="language-select">
          {router.locales.map((locale) => (
            <li className="language-select_key"key={locale}>
              <Link className="language-select_key_text" href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
  
  
  
            
  
            </div>
          </div>
        </nav>
          </>
       
    );
  };
  
  
  
  export default Navbar;
  