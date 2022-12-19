import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";


function Hir12(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir12_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir12_kep")} alt="hírek kép" className="hir_img"/>
                <p>{t("translation:hir11_p1")} https://www.24.hu/</p>

                </div>
                <div>


                <p>{t("translation:hir12_p2")}
                <a href="https://24.hu/tudomany/2022/06/11/kerti-to-vizipok-csodapok-okologia/" target="_blank" rel="noopener noreferrer" className="hir_link">{t("translation:hir12_p3")}</a>
                {t("translation:hir12_p4")}
                </p>
                <br />
                
                </div>

                </div>
                </div>
                <div className="hir_text_container">        

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir12_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir12;