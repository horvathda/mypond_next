import useTranslation from "next-translate/useTranslation";
import Hir4Carousel from "../../components/Hirek/HirekCarousel/Hir4Carousel";
import Layout from "../../components/layout";



function Hir4(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir4_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

            <img src={t("translation:hir4_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


            <p>{t("translation:hir4_p1")}
                <br/>
                <br/>
                {t("translation:hir4_p2")}
</p>
            
                </div>

            </div>
                </div>
            <div className="hir_text_container">  
                <img src="/images/hirek/gerinces_plakat.jpg" alt="plakat" className="hirek_poszter" />               
            </div>
                <div className="hir_text_container_carousel">        
                <Hir4Carousel />            
            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir4_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir4;