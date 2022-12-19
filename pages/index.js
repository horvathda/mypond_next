import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import Youtube from '../components/Fooldal/Youtube';
import Tamogatok from "../components/Fooldal/Tamogatok";
import Partnerek from "../components/Fooldal/Partnerek";
import Logok from "../components/Fooldal/Logok";
import HirekSlider from "../components/Fooldal/HirekSlider";
import Link from "next/link";
import ReactPlayer from "react-player";



export default function Home() {
  let { t } = useTranslation();

  return (
    <Layout>
<div className="main_container_1" style={{backgroundImage:"url('/images/landing_page_bg.jpg')"}}>

    <div className="right">
    <h1 className="yellow_title main_container_title">
        {t("translation:fooldal_cim_1_1")}
          </h1>
          <div className="right_text">

          <p className="white">
          {t("translation:fooldal_szoveg_1")}
          </p>
          </div>
          <div className="btn_div">

          <button className="button">
<Link href='/eredmenyek' className="kerdoiv_btn">
    {t("translation:kerdoiv")}
</Link>          </button>
          </div>
    </div>
    </div>

<div className="main_container_2">
    <div className="left">
        <div className="left_text">
            <h2 className="left__text--title">
                {t("translation:fooldal_cim_2")}
            </h2>
            <p className="left__text--text">
            {t("translation:fooldal_szoveg_2")}
<Link className="tovabb_olvasok" href="/tudod_mi_az_a_citizen_science" >
{t("translation:tovabb")}
</Link> </p>

<p className="left__text--text"> <strong>{t("translation:fooldal_kerdoiv")}</strong>
<br />
{t("translation:fooldal_kerdoiv2")}</p> 

<div className="btn_div">

<button className="button_zold">
<Link href='/kerdoiv' className="kerdoiv_btn_zold">
{t("translation:kerdoiv_button")}
</Link>          </button>
</div>  
        </div>
        <div className="left__image_container">
            <img className="left__image" src="/images/kerdojel.png" alt="kerdojel" />
        </div>

    </div>
</div>

    <div className="yellow_line">
        <div className="icon_box">
            <div className="icon_box_card">
                <div>

                <img src="/images/vastagfold.png" alt="fold" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_1")}
                </p>
                </div>

            </div>

            <div className="icon_box_card">
                <div>

                <img src="/images/okoszisztema.png" alt="okoszisztema" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_2")}
                </p>
                </div>

            </div>

            <div className="icon_box_card">
                <div>

                <img src="/images/nap.png" alt="nap es homero" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_3")}
                </p>
                </div>

            </div>

            <div className="icon_box_card">
                <div>

                <img src="/images/rekreacio.png" alt="rekreacio" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_4")}
                </p>
                </div>

            </div>

            <div className="icon_box_card">
                <div>

                <img src="/images/elohelyvesztes.png" alt="elohelyvesztes" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_5")}
                </p>
                </div>

            </div>
            <div className="icon_box_card">
                <div>

                <img src="/images/restauracio.png" alt="icon" className="icon"/>
                </div>
                <div>

                <p className="icon_box_text">
                {t("translation:fooldal_sarga_6")}
                </p>
                </div>

            </div>



        </div>

    </div>
    <div className="main_page_right" style={{   backgroundImage:"url('/images/halak.jpg')"}}>
         <div className="section_3">

        <h2 className="main_page_right_title left__text--title">
        {t("translation:fooldal_cim_3")}
            </h2>
        <p className=" main_page_right_text    left__text--text">
        {t("translation:fooldal_szoveg_3")}
<br />
<Link className="tovabb_olvasok_2" href="/kistavak_nagy_jelentoseggel" >
{t("translation:tovabb")}
</Link>
</p>
         </div>
    </div>

   <HirekSlider />
  

    <div className="video_container">

<div className="left_text_video">
    <h2 className="left__text--title">
    {t("translation:fooldal_video")}

</h2>
<div className="kanyar_box">

<img className="kanyar" src="/images/kanyar2.jpg" alt="arrow" />
</div>
    </div>
    
<Youtube />
    

</div>

<Tamogatok />
<Partnerek />

    


    </Layout>
  );
}
