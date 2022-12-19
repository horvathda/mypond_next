import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import Hir3Carousel from "../../components/Hirek/HirekCarousel/Hir3Carousel";


function Hir3(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir3_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">
                <div>

                <img src={t("translation:hir3_kep")} alt="hírek kép" className="hir_img"/>
                </div>

                <div>

                <p>{t("translation:hir3_p1")}
</p>
               

                </div>
                </div>
                </div>
                <div className="hir_text_container">  
                <img src="/images/hirek/gerinctelen_plakat.jpg" alt="plakat" className="hirek_poszter" />               
            </div>
                <div className="hir_text_container_carousel">    
                <Hir3Carousel />               
                </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir3_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir3;