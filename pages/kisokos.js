import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import KisokosItem from '../components/KisokosItems';
import Link from 'next/link'


export default function Mintavetel() {
  let { t } = useTranslation();

  return (
    <Layout>
       <div className="kisokos">




<div className='cards'>

  <div className='cards__container'>
    
      
      <ul className="cards__items">



        <KisokosItem
          src='/images/citizen_science.jpg'
          title={t("translation:kisokos_title_1")}
          text={t("translation:kisokos_text_1")}
          path='./kisokos/tudod_mi_az_a_citizen_science'
          />
        <KisokosItem
          src='/images/kistavak_bg_kicsi.jpg'
          title={t("translation:kisokos_title_2")}
          text={t("translation:kisokos_text_2")}
          path='./kisokos/kistavak_nagy_jelentoseggel'
          />

        <div className="tippek_container">
          <Link href="/kisokos/tippek"><img className="tippek_logo" alt="tippek logó"src={t("translation:tippek_logo")}/></Link>
        </div>

          <KisokosItem
          src='/images/pond_manifesto.jpg'
          title={t("translation:kisokos_title_3")}
          text={t("translation:kisokos_text_3")}
          path='./kisokos/kistavak_kialtvany'
        />
                
          <KisokosItem
          src='/images/ZoldVarangy/zoldvarangy_bg.png'
          title={t("translation:kisokos_title_4")}
          text={t("translation:kisokos_text_4")}
          path='./kisokos/zold_varangy'
        />

          


        
      

         
      
        
      </ul>
    </div>
  
</div>







    </div>
    </Layout>

  );}
