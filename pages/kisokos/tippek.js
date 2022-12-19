import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";



function Tippek () {

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="service">

            <img src={t("translation:feltoltes_alatt")} alt="tartalom felöltés alatt" className="service_image" />

        </div>    
        </Layout>
        
        );
}
export default Tippek;