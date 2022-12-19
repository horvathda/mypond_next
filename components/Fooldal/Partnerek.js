import useTranslation from "next-translate/useTranslation";



function Partnerek(){

    const { t } = useTranslation();
 

    return(
/**
    
<div >
<div >
<h2 className="logo_title partnereink">
{t("translation:fooldal_partnerek")}
</h2>
</div>
<div className="logo_container">
<div className="logo_box">
<a href="https://www.mme.hu/" target="_blank" rel="noopener noreferrer">

<img src={t("translation:fooldal_partner_1")} alt="logo" width="auto" height="130" className="logo_partner" />
</a>
<a href="https://www.mme.hu/" target="_blank" rel="noopener noreferrer">

<img src={t("translation:fooldal_partner_2")} alt="logo" width="auto" height="130" className="logo_partner" />
</a>
</div>

</div>

</div>

*/
<div>

<div>
    <h2 className="logo_title partnereink">
        {t("translation:fooldal_partnerek")}
    </h2>
</div>

<div className="logo_container">
<div className="logo_container_box">
<div className="logo_box">

    <a href="https://freshwaterhabitats.org.uk" target="_blank" rel="noopener noreferrer">
    <img src={t("translation:fooldal_partner_4")} alt="logo" width="auto" height="130" className="logo_partner" />
    </a>
</div>
<div className="logo_box">
    <a href="https://www.facebook.com/europeanponds/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_partner_3")} alt="logo" width="auto" height="130" className="logo_partner" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://herpterkep.mme.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_partner_2")} alt="logo" width="auto" height="130" className="logo_partner" />
    </a>
    </div> 
<div className="logo_box">

    <a href="https://www.wildlifetrusts.org/" target="_blank" rel="noopener noreferrer">
    <img src={t("translation:fooldal_partner_5")} alt="logo" width="auto" height="130" className="logo_partner" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://www.mme.hu/khvsz/keteltu-es-hullovedelmi-szakosztaly-0" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_partner_1")} alt="logo" width="auto" height="130" className="logo_partner" />
    </a>
    </div> 
</div>
</div>

</div>

    );
}

export default Partnerek;