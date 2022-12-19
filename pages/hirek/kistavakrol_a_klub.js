import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";


function Hir11(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir11_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir11_kep")} alt="hírek kép" className="hir_img"/>
                <p>{t("translation:hir11_p1")} https://www.klubradio.hu/</p>

                </div>
                <div>


                <p>{t("translation:hir11_p2")}</p>
                <br />
                <a href="https://www.klubradio.hu/.../utopia-2022-majus-24-kedd" target="_blank" rel="noopener noreferrer" ><i class="fa-solid fa-headphones"></i>{t("translation:hir11_p3")}</a>
                
                </div>

                </div>
                </div>
                <div className="hir_text_container">        

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir11_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir11;