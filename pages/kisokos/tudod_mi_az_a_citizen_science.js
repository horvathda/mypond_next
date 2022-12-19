import useTranslation from "next-translate/useTranslation";
import Layout from "../../components/layout";




export default function CitizenScience(){


    const { t } = useTranslation();


    return(

<Layout>
<div class="kisokos_first-box citizen_science_bg" style={{    backgroundImage:"url('/images/citizen_science.jpg')"}}>
    <h1 class="kisokos_title">
        {t("translation:citizen_scince_title")}
    </h1>
    <p class="kisokos_text">
        {t("translation:citizen_science_text")}
        
    </p>
</div>

        <div class="second-section__box" style={{backgroundImage: "url('/images/SC_hatter.png')"}} >
      <div class="second-section-div">

          <div>
              <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/1_szövegbuborék.png')"}}>
                  <div class="second-section--text-box__text">
                      
                      <p class="citizen_left">
                      {t("translation:citizen_science_text_1")} 
                          </p>
                    </div>
                </div>
            </div>
            <div>
                
                <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/2_szövegbuborék.png')"}}>
                    <div class="second-section--text-box__text">
                        
                        <p class="citizen_right">
                        {t("translation:citizen_science_text_2")} 
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
<div class="second-section-div">

    <div>
        
        <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/3_szövegbuborék.png')"}}>
            <div class="second-section--text-box__text">
                
                <p class="citizen_left">
                {t("translation:citizen_science_text_3")} 
                </p>
                </div>
            </div>
            
        </div>
        
        <div>
            
            <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/4_szövegbuborék.png')"}}>
                <div class="second-section--text-box__text">
                    
                    <p class="citizen_right">
                    {t("translation:citizen_science_text_4")}                         
                    </p>
                    </div>
                </div>
                
            </div>
        </div>


        <div class="second-section-div">

            <div>
                <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/5_szövegbuborék.png')"}}>
                    <div class="second-section--text-box__text">
                        
                        <p class="citizen_left">
                        {t("translation:citizen_science_text_5")}                             
                        </p>                   
                       </div>
                  </div>
              </div>
              <div>
                  
                  <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/6_szövegbuborék.png')"}}>
                      <div class="second-section--text-box__text">
                          
                          <p class="citizen_right">
                          {t("translation:citizen_science_text_6")} 

                              </p>                         
                         </div>
                      </div>
                      
                  </div>
              </div>


              <div class="second-section-div">

                <div>
                    <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/7_szövegbuborék.png')"}}>
                        <div class="second-section--text-box__text">
                            
                            <p class="citizen_left">
                            {t("translation:citizen_science_text_7")} 

                                </p>          
                                       </div>
                      </div>
                  </div>
                  <div>
                      
                      <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/8_szövegbuborék.png')"}}>
                          <div class="second-section--text-box__text">
                              
                              <p class="citizen_right">
                              {t("translation:citizen_science_text_8")}                                   
                                  </p>
                              
                              </div>
                          </div>
                          
                      </div>
                  </div>

                  <div class="second-section-div">

                    <div>
                        <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/9_szövegbuborék.png')"}}>
                            <div class="second-section--text-box__text">
                                
                                <p class="citizen_left">
                                {t("translation:citizen_science_text_9")} 

                                </p>
                              </div>
                          </div>
                      </div>
                      <div>
                          
                          <div class= "second-section--text-box bg" style={{backgroundImage:"url('/images/citizen_science/10_szövegbuborék.png')"}}>
                              <div class="second-section--text-box__text">
                                  
                                  <p class="citizen_right">
                                    {t("translation:citizen_science_text_10")}                                     
                                  </p>
                                </div>
                              </div>
                              
                          </div>
                      </div>
                      <div className="forras">
                          <a href="https://osf.io/a4v7x/?fbclid=IwAR056z-JWEVYzT_wx-6GbtqqT_8mECXjUo6i_nAkAEMsIm4i2FFiFrabhR0" target="_blank" rel="noopener noreferrer "className="forras_link">Forrás</a>

                      </div>


          
  </div>
        </Layout>
    );}