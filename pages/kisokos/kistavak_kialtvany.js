import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";
import HTMLFlipBook from 'react-pageflip';


function Kialtvany() {

    const { t } = useTranslation();

    return (
<Layout>
<div className="kiadvany_text">
    <p>
{t("translation:kialtvany_text")}
    </p>
    
</div>

<HTMLFlipBook width={700} height={1000} className="flipbook_box">
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_01")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_02")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_03")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_04")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_05")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_06")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_07")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_08")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_09")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_10")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_11")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_12")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_13")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_14")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_15")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_16")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_17")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_18")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_19")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_20")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_21")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_22")} alt="kepek" className="proba" /></div>
              <div className="demoPage"><img src={t("translation:kiadvany_oldal_23")} alt="kepek" className="proba" /></div>
              
              
  
          </HTMLFlipBook>  
</Layout>
          );
  };
  
  export default Kialtvany;