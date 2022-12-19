import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";


function Hir1(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="hir_container">
            <div className="hir">
                <div className="hir_title"><h2>{t("translation:hir1_cim")}</h2></div>
                <div className="hir_text_container">
                    <div className="hir_kep">

                    <div className="forras_kep">
                    <img src={t("translation:hir1_kep")} alt="hírek kép" className="hir_img"/>
                    <p>{t("translation:hir1_p1")} https://ng.24.hu/</p>

                    </div>
                    <div>


                    <p>{t("translation:hir1_p2")}
                    </p> 
                    <br/>
                    <p>{t("translation:hir1_p3")}
                    <a href="https://ng.24.hu/fold/2021/07/20/milyen-hatassal-lehetnek-a-kerti-kistavak-a-helyi-biodiverzitasra/" target="_blank" rel="noopener noreferrer">{t("translation:hir1_p4")}</a> 
                    {t("translation:hir1_p5")}</p>              

                    
                    </div>
                    
                    </div>
                </div>

            </div>
            <div className="hir_datum"><p>{t("translation:hir1_datum")}</p></div>
        </div>
            
            <div className="white_space"></div>
        </Layout>

    )
};

export default Hir1;