import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import ZoldVarangySlider from '../../components/ZoldVarangySlider';




function ZoldVarangy(){

    const { t } = useTranslation();

    return(

        <Layout>

        <div class="kisokos_first-box kistavak_bg" style={{     backgroundImage:"url('/images/ZoldVarangy/zoldvarangy_fokep_kicsi-min.png')"}}>
        <h1 class="kisokos_title">
            {t("translation:zoldvarangy_title")}   
        </h1>
    
        <p 
        class="kisokos_text"
        id="varangy_text">
            {t("translation:zoldvarangy_text")}   
    
        </p>
        
    </div>
    
                <div className="kistavak_section_2">
                    <div className="section2_box">
                        
                        <div className="varangy_box-text">
                        <img src="/images/ZoldVarangy/zoldvarangy_1.jpg" alt="Zöld varangy" className=" varangy_kep"/>
                        <p>
                            {t("translation:zoldvarangy_section_1_text")}
                        </p>
                        
                        <p>
                           <br /> {t("translation:zoldvarangy_section_2_text")}
                        </p>
                        
                        <p>

                        <img src="/images/ZoldVarangy/2.jpg" alt="Zöld varangy" className=" varangy_kep_2"/>
                        <br /> {t("translation:zoldvarangy_section_3_text")}
                        </p>

                        <div className="szerzo">
                            <div>
                                <p>{t("translation:iro")}&nbsp;</p>
                            </div>
                            <div>
                                <p>{t("translation:iro_nev")}</p>
                                <a href="https://www.mme.hu/khvsz/keteltu-es-hullovedelmi-szakosztaly-0" target="_blank" rel="noopener noreferrer">{t("translation:osztaly")}</a>
                        
                                
                            </div>
                        </div>
                        
                 
                            </div>
           
                    </div>
                    </div>
        
            <ZoldVarangySlider />

            <div className="kistavak_section_2">
                    <div className="section2_box">
                        
                        <div className="varangy_box-text">
 
            <div className="szerzo">
                <div>
                    <p>{t("translation:kepek")}&nbsp;</p>
                </div>
                <div>
                    <p>{t("translation:kepek_nev")}</p>
                </div>
            </div>
            </div>
            </div>
            </div>



            </Layout>
    );
    }





export default ZoldVarangy;