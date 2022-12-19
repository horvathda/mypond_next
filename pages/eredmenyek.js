import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";


function Eredmenyek () {

    const { t } = useTranslation();

    return(
<Layout>

        <div className="eredmenyek_container">

            <img src={t("translation:eredmenyek")} alt="eredmenyek" className="eredmenyek" />

        </div>    
</Layout>
        
        );
}
export default Eredmenyek;