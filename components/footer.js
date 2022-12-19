import useTranslation from "next-translate/useTranslation";
//import {Link} from 'react-router-dom';
import SocialIcon from './SocialIcon';
//import Pdf from './Adatkezelesi_tajekoztato.pdf';

function Footer(){

    const { t } = useTranslation();

return(
    <div className="footer_container">

<div className="footer">
    
    <div className="footer_link_container footer_space">

        {/*
         <Link to="/adatkezelesi_tajekoztato" className="adatkezeles">Adatkezelési tájékoztató</Link>
         */}
         <a href="https://mypond.hu/images/Adatkezelesi_tajekoztato.pdf" target="_blank"  className=" adatkezeles" rel="noopener noreferrer">{t("translation:footer_adatkezeles")}</a>
        
        
    </div>
    <div className="footer_text_container footer_space">
        <p className="footer_text">{t("translation:footer_minden_jog")}</p>

    </div>
    <SocialIcon />


    </div>
</div>
);

}

export default Footer;