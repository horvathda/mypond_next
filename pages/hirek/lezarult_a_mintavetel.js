import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import Link from 'next/link'


function Hir13(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir13_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir13_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>


                <p>{t("translation:hir13_p1")}
                <Link href="/kerdoiv">{t("translation:hir13_p2")}</Link>
                </p>
                <br />
                <p>{t("translation:hir13_p3")}</p>
                <br/>
                <h3>{t("translation:hir13_p4")}</h3>
                <br/>
                <p>{t("translation:hir13_p5")}</p>
                </div>

                </div>
                </div>
                <div className="hir_text_container">        

            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir13_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir13;