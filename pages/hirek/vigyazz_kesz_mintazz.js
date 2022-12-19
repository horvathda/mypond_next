import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";


function Hir6(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir6_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir6_kep")} alt="hírek kép" className="hir_img"/>
                <p>{t("translation:hir6_p1")} </p>
                </div>
                <div>


                <p>{t("translation:hir6_p2")}<strong>{t("translation:hir6_p3")}</strong>{t("translation:hir6_p4")}</p>
                <br />
                <p>{t("translation:hir6_p5")}</p>
                <br/>
                <p>{t("translation:hir6_p6")}</p>
                </div>

                </div>
                </div>
                <div className="hir_text_container">        

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir6_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir6;