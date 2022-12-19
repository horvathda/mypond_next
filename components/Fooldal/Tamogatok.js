import useTranslation from "next-translate/useTranslation";



function Tamogatok(){

    const { t } = useTranslation();
 

    return(

    <div>
<div>
    <h2 className="logo_title">
        {t("translation:fooldal_tamogatok")}
    </h2>
</div>
<div className="logo_container">

<div className="logo_container_box">
<div className="logo_box">
    <a href="https://elkh.org/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_1")} alt="logo" width="auto" height="100" className="logo" />
    </a>
</div>
<div className="logo_box">
    <a href="https://ecolres.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_2")} alt="logo" width="auto" height="80" className="logo" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://www.elte.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_3")} alt="logo" width="auto" height="100" className="logo" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://www.nemzetilaborok.nkfih.gov.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_4")} alt="logo" width="auto" height="110" className="logo" />
    </a>
    </div> 

 
</div>
<div className="logo_container_box">
<div className="logo_box">
    <a href="http://www.unkp.gov.hu/unkp-rol" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_5")} alt="logo" width="auto" height="140" className="logo" />
    </a>
    </div> 
<div className="logo_box">
    <a href="http://www.labsystem.hu/kapcsolat/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_6")} alt="logo" width="auto" height="120" className="logo" />
    </a>
</div>
<div className="logo_box">
    <a href="https://greenlab.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_7")} alt="logo" width="auto" height="120" className="logo" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://oazis.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_8")} alt="logo" width="auto" height="130" className="logo" />
    </a>
    </div> 

</div>
<div className="logo_container_box">
<div className="logo_box">
    <a href="https://expressone.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_9")} alt="logo" width="auto" height="80" className="logo" />
    </a>
    </div> 
<div className="logo_box">
    <a href="https://unicam.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_10")} alt="logo" width="auto" height="30" className="logo" />
    </a>
    </div> 
<div className="logo_box messer">
    <a href="https://www.messer.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_11")} alt="logo" width="auto" height="50"  className="logo" />
    </a>
</div>
<div className="logo_box">
    <a href="https://foxpost.hu/" target="_blank" rel="noopener noreferrer">

    <img src={t("translation:fooldal_tamogatok_12")} alt="logo" width="auto" height="110" className="logo" />
    </a>
    </div> 


</div>
</div>

</div>
    );
}

export default Tamogatok;