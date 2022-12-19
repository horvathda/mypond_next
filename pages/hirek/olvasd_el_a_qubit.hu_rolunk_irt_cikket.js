import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import  Link  from 'next/link';



function Hir2(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir2_cim")}</h2></div>
                <div className="hir_text_container">
                <div className="hir_kep">

                <div>

                <img src={t("translation:hir2_kep")} alt="hírek kép" className="hir_img"/>
                </div>
<div>


                <p>{t("translation:hir2_p1")}
                <Link href="/kerdoiv">{t("translation:hir2_p2")}</Link>
                {t("translation:hir2_p3")}</p>
                <br />
                <p>{t("translation:hir2_p4")}</p>
<br />
<p>{t("translation:hir2_p5")}
<a href="https://qubit.hu/2021/09/11/a-kerti-kistavak-biodiverzitasa-vetekedhet-a-termeszetvedelmi-teruletekevel" target="_blank" rel="noopener noreferrer">{t("translation:hir2_p6")}</a>{t("translation:hir2_p7")}</p>

</div>
                </div>
                </div>
                <div className="hir_text_container">                   
                </div>
            </div>
            <div className="hir_datum"><p>{t("translation:hir2_datum")}</p></div>

        </div>
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir2;