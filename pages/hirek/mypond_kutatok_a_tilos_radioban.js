import useTranslation from "next-translate/useTranslation";
import Hir14Carousel from "../../components/Hirek/HirekCarousel/Hir14Carousel";
import Layout from "../../components/layout";




function Hir14(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir14_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir14_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir14_p1")}</p>
                <br />
                <a href="https://tilos.hu/episode/tudas-hatalom/2022/06/21" target="_blank" rel="noopener noreferrer" className="hirek_link"><i class="fa-solid fa-headphones"></i>{t("translation:hir14_p2")}</a>
                <br/>
                
                </div>

                </div>
                </div>
                <div className="hir_text_container">        
                <Hir14Carousel />

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir14_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir14;