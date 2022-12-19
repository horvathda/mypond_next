import useTranslation from "next-translate/useTranslation";
import Hir8Carousel from "../../components/Hirek/HirekCarousel/Hir8Carousel";
import Layout from "../../components/layout";


function Hir8(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir8_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir8_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir8_p1")}</p>
                <br />
                <p>{t("translation:hir8_p2")}
                    <br/><br/>
                    {t("translation:hir8_p3")}

</p>
                <br/>
                </div>

                </div>
                </div>
                <div className="hir_text_container">        
                <Hir8Carousel />

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir8_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir8;