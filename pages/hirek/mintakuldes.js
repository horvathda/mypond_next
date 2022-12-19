import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import Hir9Carousel from "../../components/Hirek/HirekCarousel/Hir9Carousel";


function Hir9(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir9_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir9_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir9_p1")}
                <br />
                <br />
                {t("translation:hir9_p2")} 

</p>
               
               
                </div>

                </div>
                </div>
                <div className="hir_text_container">        
                <Hir9Carousel />

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir9_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir9;