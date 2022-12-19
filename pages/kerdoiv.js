import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";

export default function Kerdoiv() {
  let { t } = useTranslation();

  return (
    <Layout>
<div className="kerdoiv">
    {/*
<img className="kerdoiv_kep" src="/images/kerdoiv_kep.png" alt="ugró béka" />
     */}
  

<iframe className="kerdoiv_kerdoiv" title="kerdoiv" src={t("translation:kerdoiv_link")} width="640" height="7581" frameborder="0" marginheight="0" marginwidth="0">{t("loading")}</iframe>
</div>
    </Layout>
  );
}
