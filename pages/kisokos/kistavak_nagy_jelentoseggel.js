import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";


function Kistavak() {

    const { t } = useTranslation();

    return (
        <Layout>
            <div class="kisokos_first-box kistavak_bg" style={{     backgroundImage:"url('/images/kistavak_bg.jpg')"}}>
    <h1 class="kisokos_title">
        {t("translation:kistavak_title")}   
    </h1>

    <p class="kisokos_text">
        {t("translation:kistavak_text")}   

    </p>
</div>

            <div className="kistavak_section_2">
                <div className="section2_box">
                    <div className="section2_box-title">
                        <h2>
                            {t("translation:kistavak_section_1_title")} 
                        </h2>

                    </div>
                    <div className="section2_box-text">
                    <img src="/images/kistavak_1.jpg" alt="kistavak_1" className="kistavak_kep"/>
                    <p>
                        {t("translation:kistavak_section_1_text")}
                    </p>
                        </div>
                        <div>
                        <ul className="felsorolas">
                            <li className="felsorolas_sor">
                           <img src="/images/talp.png" alt="talp" className="talp"/> 
                           {t("translation:kistavak_section_1_li_1")}
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                           {t("translation:kistavak_section_1_li_2")}
                            </li>
                        </ul>
                    </div>
                    <div className="tudtad_right">

                        <div className="tudtad_box">
        
                            <div className="tudtad_box_title">
                                <h1 className="tudtad_title">
                                    {t("translation:tudtad")}
                                </h1>
                                <img src="/images/tudtad.png" alt="béka" className="tudtad_beka" />
                            </div>
                            <div className="tudtad_box_text">
                                <p>
                                    {t("translation:kistavak_section_1_tudtad_1")} <br />
                                    {t("translation:kistavak_section_1_tudtad_2")}

                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

<div className="grey_bg">

                <div className="section2_box ">
                    <div className="section2_box-title">
                        <h2>
                        {t("translation:kistavak_section_2_title")}
                        </h2>

                    </div>
                    <div className="box1">

                    <div className="section2_box-text">
                    <img src="/images/kistavak_2.jpg" alt="kistavak_1" className="kistavak_kep"/>
                    <p> 
                    {t("translation:kistavak_section_2_text_1")}

                    </p>
                    </div>
                    <div>

                        <ul className="felsorolas felsorolas_jobb">
                            <li className="felsorolas_sor">
                           <img src="/images/talp.png" alt="talp" className="talp"/> 
                           {t("translation:kistavak_section_2_li_1")}

                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                            {t("translation:kistavak_section_2_li_2")}
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                            {t("translation:kistavak_section_2_li_3")}
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                            {t("translation:kistavak_section_2_li_4")}
                            </li>
                        </ul>
                    </div>
                    <div className="section2_box-text">
                        <p>
                        {t("translation:kistavak_section_2_text_2")}
                            
                            </p>
                    </div>

                </div>

            </div>
            </div>

            <div className="section2_box">
                    <div className="section2_box-title">
                        <h2>
                            {t("translation:kistavak_section_3_title")}
                        </h2>

                    </div>
                    <div className="box1">

                    <div className="section2_box-text">
                    <img src="/images/kistavak_3.jpg" alt="kistavak_1" className="kistavak_kep"/>
                    <p> 
                        {t("translation:kistavak_section_3_text")}
                    </p>
                    </div>
                    
                    
              <div className="tudtad_left">

<div className="tudtad_box">

<div className="tudtad_box_title">
    <h1 className="tudtad_title">
       {t("translation:tudtad")}
    </h1>
<img src="/images/tudtad.png" alt="béka" className="tudtad_beka" />
</div>
                            <div className="tudtad_box_text">
                                <p>
                               {t("translation:kistavak_section_3_tudtad_1")}                                
                                </p>
                            </div>
                        </div>
    </div>
    <div className="tudtad_right">

<div className="tudtad_box">

<div className="tudtad_box_title">
    <h1 className="tudtad_title">
    {t("translation:tudtad")}
    </h1>
<img src="/images/tudtad.png" alt="béka" className="tudtad_beka" />
</div>
                            <div className="tudtad_box_text">
                                <p>
                                {t("translation:kistavak_section_3_tudtad_2")}                                
                                </p>
                            </div>
                        </div>
    </div>
    </div>
    </div>
    <div className="grey_bg">
    <div className="section2_box">

    <div className="section2_box-title">
                        <h2>
                            {t("translation:kistavak_section_4_title")}                                
                        </h2>

                    </div>
    <div>

                        <ul className="felsorolas felsorolas_jobb">
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                                <span>
                                  {t("translation:kistavak_section_4_li_1")}
                                </span>
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                                <span>

                                    {t("translation:kistavak_section_4_li_2")}
                                </span>
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                                <span>
                                    {t("translation:kistavak_section_4_li_3")}
                                </span> 
                            </li>
                            <li className="felsorolas_sor">
                            <img src="/images/talp.png" alt="talp" className="talp"/>
                                <span>

                                {t("translation:kistavak_section_4_li_4")}
                                </span>
                            </li>
                            <li className="felsorolas_sor">
                           <img src="/images/talp.png" alt="talp" className="talp"/>
                                <span>
                                    {t("translation:kistavak_section_4_li_5")}
                                </span> 
                            </li>
                            </ul>
                </div>
                <div className="tudtad_left">

<div className="tudtad_box">

<div className="tudtad_box_title">
<h1 className="tudtad_title">
    {t("translation:tudtad")}
</h1>
<img src="/images/tudtad.png" alt="béka" className="tudtad_beka" />
</div>
                            <div className="tudtad_box_text">
                                <p>
                                {t("translation:kistavak_section_4_tudtad")}
                                </p>
                            </div>
                        </div>
    </div>
                </div>
                </div>
        <div className="section2_box">
                    <div className="section2_box-title">
                        <h2>
                            {t("translation:kistavak_section_5_title")}                  
                        </h2>

                    </div>
                    <div className="box1">

                    <div className="section2_box-text">
                    <img src="/images/globalwarming.jpg" alt="kistavak_1" className="kistavak_kep"/>
                    <p> 
                        {t("translation:kistavak_section_5_text_1")}                  

                    </p>
                    </div>
                    <div className="tudtad_right">

                        <div className="tudtad_box">

                    <div className="tudtad_box_title">
                        <h1 className="tudtad_title">
                            {t("translation:tudtad")}
                        </h1>
                        <img src="/images/tudtad.png" alt="béka" className="tudtad_beka" />
                    </div>
                            <div className="tudtad_box_text">
                                <p>
                                    {t("translation:kistavak_section_5_tudtad")}
                                </p>
                            </div>
                        </div>
    </div>
                    <div className="section2_box-text">
                        <p>
                        {t("translation:kistavak_section_5_text_2")}
                        </p>
                    </div>

                </div>

            </div>
            <div className="section2_box">
                <img src="/images/kisto_faval.jpg" alt="kisto faval" className="vege_kep" />
            </div>

            </div>





        </Layout>

    );
}

export default Kistavak;