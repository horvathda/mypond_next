import useTranslation from "next-translate/useTranslation";
import Hir10Carousel from "../../components/Hirek/HirekCarousel/Hir10Carousel";
import Layout from "../../components/layout";



function Hir10(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir10_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir10_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir10_p1")}
                    <br/>
                    <br/>
                    {t("translation:hir10_p2")}
                    <br/>
                    <br/>
                    {t("translation:hir10_p3")}
                    <br/>
                    <br/>
                    {t("translation:hir10_p4")}

                    </p>     </div>

                </div>
                </div>
                <div className="hir_text_container">        
                <Hir10Carousel />

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir10_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir10;