import RolunkItems from './RolunkItems';
import useTranslation from "next-translate/useTranslation";

function RolunkPersons () {


    const { t } = useTranslation();
 

    return(
        <div className="rolunk__container" >
        <RolunkItems 
        /*Horváth Zsófia */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"
        src={t("translation:rolunk_kep_1")}
        nev={t("translation:rolunk_nev_1")}
        vegzettseg={t("translation:rolunk_vegzettseg_1")}
        text={t("translation:rolunk_text_1")}
        />

        <RolunkItems 
        /*Vad Csaba */
        oldal="rolunk__container--jobb"
        oldal_oldal="rolunk_oldal_jobb"
        adatok_oldal="rolunk__container--adatok_jobb"
        src={t("translation:rolunk_kep_2")}
        nev={t("translation:rolunk_nev_2")}
        vegzettseg={t("translation:rolunk_vegzettseg_2")}
        text={t("translation:rolunk_text_2")}
        />
        
        <RolunkItems 
        /* Dobossy Péter */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"
        src={t("translation:rolunk_kep_11")}
        nev={t("translation:rolunk_nev_11")}
        vegzettseg={t("translation:rolunk_vegzettseg_11")}
        text={t("translation:rolunk_text_11")}
        />


        <RolunkItems 
        /* Szabó Bea */
        oldal="rolunk__container--jobb"
        oldal_oldal="rolunk_oldal_jobb"
        adatok_oldal="rolunk__container--adatok_jobb"
        src={t("translation:rolunk_kep_3")}
        nev={t("translation:rolunk_nev_3")}
        vegzettseg={t("translation:rolunk_vegzettseg_3")}
        text={t("translation:rolunk_text_3")}
        />
        <RolunkItems 
        /*Irene Tornera */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"
        src={t("translation:rolunk_kep_9")}
        nev={t("translation:rolunk_nev_9")}
        vegzettseg={t("translation:rolunk_vegzettseg_9")}
        text={t("translation:rolunk_text_9")}
        />
        <RolunkItems 
        /* Andrew Hammer */
        oldal="rolunk__container--jobb"
        oldal_oldal="rolunk_oldal_jobb"
        adatok_oldal="rolunk__container--adatok_jobb"
        src={t("translation:rolunk_kep_10")}
        nev={t("translation:rolunk_nev_10")}
        vegzettseg={t("translation:rolunk_vegzettseg_10")}
        text={t("translation:rolunk_text_10")}
        />
        <RolunkItems 
        /* Barta Barbara */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"

        src={t("translation:rolunk_kep_4")}
        nev={t("translation:rolunk_nev_4")}
        vegzettseg={t("translation:rolunk_vegzettseg_4")}
        text={t("translation:rolunk_text_4")}
        />
        <RolunkItems 
        /* Márton Zsuzsanna */
        oldal="rolunk__container--jobb"
        oldal_oldal="rolunk_oldal_jobb"
        adatok_oldal="rolunk__container--adatok_jobb"

        src={t("translation:rolunk_kep_12")}
        nev={t("translation:rolunk_nev_12")}
        vegzettseg={t("translation:rolunk_vegzettseg_12")}
        text={t("translation:rolunk_text_12")}
        />
        <RolunkItems 
        /*Laskai Csilla */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"
        src={t("translation:rolunk_kep_8")}
        nev={t("translation:rolunk_nev_8")}
        vegzettseg={t("translation:rolunk_vegzettseg_8")}
        text={t("translation:rolunk_text_8")}
        />
        

        <RolunkItems 
        /* Fierpasz Ádám */
        oldal="rolunk__container--jobb"
        oldal_oldal="rolunk_oldal_jobb"
        adatok_oldal="rolunk__container--adatok_jobb"
        src={t("translation:rolunk_kep_6")}
        nev={t("translation:rolunk_nev_6")}
        vegzettseg={t("translation:rolunk_vegzettseg_6")}
        text={t("translation:rolunk_text_6_1")}
        text2={t("translation:rolunk_text_6_2")}
        />

        <RolunkItems 
        /* Kardos Vivien */
        oldal="rolunk__container--bal"
        oldal_oldal="rolunk_oldal_bal"
        adatok_oldal="rolunk__container--adatok_bal"
        src={t("translation:rolunk_kep_7")}
        nev={t("translation:rolunk_nev_7")}
        vegzettseg={t("translation:rolunk_vegzettseg_7")}
        text={t("translation:rolunk_text_7")}
        />




</div>
    );
}

export default RolunkPersons;


