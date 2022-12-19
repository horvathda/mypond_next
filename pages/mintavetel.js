import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";

export default function Mintavetel() {
  let { t } = useTranslation();

  return (
    <Layout>
<div className="video_mintavetel_container">

<div className="left_text_video_2">
<div>

    <h2 className="left__text--title">
    {t("translation:mintavetel_video")}

</h2>
</div>
<div className="kanyar_box_2">
<div>
<img className="kanyar_2" src="/images/kanyar2.jpg" alt="arrow" />
</div>
<div className="kezikonyv_container">


    <a href="https://mypond.hu/images/mintavetel/Mintavetel.pdf" className="kezikonyv_link" target="_blank" rel="noopener noreferrer">

            <img src="/images/mintavetel/kezikonyv.png" alt="kezikonyv"
            className="kezikonyv_img" />
            </a>
</div>
        </div>
    </div>
    <div className="video_box">
            <iframe 
             
            src="https://www.youtube.com/embed/4anK98-WgQM" 
            title="YouTube video player" 
           
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>

        </div>

        

    </div> 
    </Layout>
  );
}