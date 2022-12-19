import useTranslation from "next-translate/useTranslation";

function SocialIcon(){
    let { t } = useTranslation();

    return(
        <div className="social-icon_big_box">

        <div className="social-icon_box footer_space">
   
   
   
            <div>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100070229768076" >
                <img  className="social-icon"src={t("translation:footer_facebook")} alt="facebook" /></a>
            </div>
            <div>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/mypond_voi/?hl=en" >
                <img className="social-icon" src={t("translation:footer_instagram")} alt="instagram" /></a>
            </div>
            <div>
            <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/mypond_hu" >
                <img className="social-icon social-icon_space" src={t("translation:footer_twitter")} alt="twitter" /></a>
            </div>
            <div>
            <a target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzo_RSe9s0JjM3NgqGCm6lw" >
                <img className="social-icon" src={t("translation:footer_youtube")} alt="youtube" /></a>
            </div>
        </div>
       </div>

    );
    
}

export default SocialIcon;