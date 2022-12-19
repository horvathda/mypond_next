import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import Link from 'next/link';

function Hir5(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir5_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir5_kep")} alt="hírek kép" className="hir_img"/>
                </div>
                <div>

                <p>
                {t("translation:hir5_p1")}
                </p>
                <br/>
                <p>{t("translation:hir5_p10")}
                <Link href="/kerdoiv">{t("translation:hir5_p2")}</Link>{t("translation:hir5_p3")}
                </p>
                <br/>
                <p>                  
                {t("translation:hir5_p4")}
                </p>
                <br/>
                <p>
                {t("translation:hir5_p5")}
                </p>
                <br/>
                <p>
                {t("translation:hir5_p6")}
                </p>
                



                </div>
                </div>
                </div>
                <div className="hir_text_container"> 
                <p>
                {t("translation:hir5_p7")}
                </p>
                <br/>
                <p>
                {t("translation:hir5_p8")}
                </p>
                <br/>
                <p>
                {t("translation:hir5_p9")}
                </p> 
                 
            </div>
                <div className="hir_text_container">  
                <img src="/images/eredmenyek.jpg" alt="mintazz" className="hirek_poszter" />               
            </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir5_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir5;