import useTranslation from "next-translate/useTranslation";
import Layout from "../components/layout";
import Link from 'next/link';


function Celunk(){

    const { t } = useTranslation();

    return(
        <Layout>

        <div className="celunk">
            <div className="celunk__section">

                <div className="celunk__section__text_right">
                    <div className="celunk__text">
                    <h1 className="celunk__title__title">
                        {t("translation:celunk_title_1")}
                    </h1>
                      <p className="celunk__text__text">
                        {t("translation:celunk_text_1_1")}
                      <Link href="/tudod_mi_az_a_citizen_science" className="celunk_link">citizen  science</Link>                  {t("translation:celunk_text_1_2")}
                      </p>
                    </div>

                    <div className="celunk__image">
                        <img className="celunk__image_image" alt="kep" src="/images/adatbazis.png" />

                    </div>


                </div>

            </div>
            
            
            <div className="grey">

            <div className="celunk__section ">

                <div className="celunk__section__text_left">
                    <div className="celunk__text">
                    <h1 className="celunk__title__title">
                    {t("translation:celunk_title_2")}
                    </h1>
                      <p className="celunk__text__text">
                      {t("translation:celunk_text_2_1")}
                        <br /> 
                      {t("translation:celunk_text_2_2")}

                      </p>
                    </div>

                    <div className="celunk__image">
                        <img className="celunk__image_image" alt="kep" src="/images/foiskola.png" />

                    </div>


                </div>

            </div>
            </div>
            
            
            
            <div className="celunk__section">

                <div className="celunk__section__text_right">
                    <div className="celunk__text">
                    <h1 className="celunk__title__title">
                    {t("translation:celunk_title_3")}
                    </h1>
                      <p className="celunk__text__text">
                      {t("translation:celunk_text_3")}

                      </p>
                    </div>

                    <div className="celunk__image">
                        <img className="celunk__image_image" alt="kep" src="/images/környeztineveles.png" />

                    </div>


                </div>

            </div>

        </div>
        </Layout>
    );
}
export default Celunk;