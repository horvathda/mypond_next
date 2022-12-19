import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";

export default function NotFound() {
  
  let { t } = useTranslation();

  return (
    <Layout>


  <div className="not-found_container">
    <h2 className="not-found">{t("translation:404")}</h2>
  </div>
  </Layout>
);
}
