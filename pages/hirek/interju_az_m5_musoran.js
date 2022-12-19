import useTranslation from "next-translate/useTranslation";
import Hir7Carousel from "../../components/Hirek/HirekCarousel/Hir7Carousel";
import Layout from "../../components/layout";


function Hir7(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir7_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir7_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir7_p1")}</p>
                <br />
                <p>{t("translation:hir7_p2")}</p>
                <br/>
                
                </div>

                </div>
                </div>
                <div className="hir_text_container">        
            <Hir7Carousel />
            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir7_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir7;