import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";


function Kapcsolat() {

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="kapcsolat_main">
                    <div className="kapcsolat__map">
                       <iframe title="terkep" 
                       className="kapcsolat__map_map" 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21574.4431535684!2d19.025701516687192!3d47.474221603331905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddcb90403085%3A0x637020bcb919c9e0!2zw5Zrb2zDs2dpYWkgS3V0YXTDs2vDtnpwb250LCBWw616aSDDlmtvbMOzZ2lhaSBJbnTDqXpldCAoVsOWSSk!5e0!3m2!1shu!2shu!4v1622874506986!5m2!1shu!2shu" 
                       width="600" height="500" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="kapcsolat__adatok">
                        <div className="kapcsolat__adatok__center">
        
                        <h3 className="kapcsolat__adatok_cim">
                            {t("translation:kapcsolat_title")}
                        </h3>

                        <h3 className="adatok1">

                        <br />
                            {t("translation:kapcsolat_line_1")} 
                        <br />
                            {t("translation:kapcsolat_line_2")} 
                        <br />
                            {t("translation:kapcsolat_line_3")} 
                        <br />
                            {t("translation:kapcsolat_line_4")} 

                        </h3>

                        <h3 className="adatok email">
                            <img alt="icon" className="kapcsolat_icon" src="/images/hely.png"/>
                            {t("translation:kapcsolat_line_5")}
                        </h3>
        
                        <h3 className="adatok email">
                            <img alt="icon" className="kapcsolat_icon" src="/images/mail.png"/>
                            {t("translation:kapcsolat_line_6")} 

                        </h3>
                        <div className="social-icon_box_kapcsolat">
                            <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100070229768076">
                                    <img className="social-icon" src="/images/facebook.png" alt="facebook" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mypond_voi/?hl=en">
                                    <img className="social-icon" src="/images/instagram.png" alt="instagram"/>
                                    </a>
                            </div>
                                    
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mypond_hu">
                                    <img className="social-icon social-icon_space" src="/images/twitter.png" alt="twitter"/>
                                    </a>
                            </div>
                            <div> 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzo_RSe9s0JjM3NgqGCm6lw">
                                    <img className="social-icon" src="/images/youtube.png" alt="youtube" />
                                </a>
                            </div>
                        </div>
        
        
        
        
                        </div>
                    </div>
                    </div>
              
        
                       </Layout>
        
                );
}
export default Kapcsolat;