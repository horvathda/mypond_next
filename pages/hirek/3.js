import Layout from "../../components/layout";
import usetranslation from "next-translate/usetranslation";
import Link from "next/link"
import Megjelenesek from '../../components/Hirek/Megjelenesek';
import HirekNav from '../../components/Hirek/HirekNav';
import HirekItems from '../../components/Hirek/HirekItems'




function HirPage3  (){

  const { t } = usetranslation();

    return(
  
        
<Layout>   
<div className = "hirek_container " >
<div className = "hirek_container_box">
<div >
<HirekItems
src={t("translation:hir1_kep")}
datum={t("translation:hir1_datum")}
title={t("translation:hir1_cim")}
text={t("translation:hir1_szoveg_bevezetes")}
path={t("translation:hir1_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir2_kep")}
datum={t("translation:hir2_datum")}
title={t("translation:hir2_cim")}
text={t("translation:hir2_szoveg_bevezetes")}
path={t("translation:hir2_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir3_kep")}
datum={t("translation:hir3_datum")}
title={t("translation:hir3_cim")}
text={t('translation:hir3_szoveg_bevezetes')}
text_2={t('translation:hir3_szoveg_bevezetes_2')}
path={t("translation:hir3_path")}
/>
</div> 
<div>
<HirekItems
src={t("translation:hir4_kep")}
datum={t("translation:hir4_datum")}
title={t("translation:hir4_cim")}
text={t("translation:hir4_szoveg_bevezetes")}
path={t("translation:hir4_path")}
/>
</div> 




</div> 

</div>


<HirekNav />
<Megjelenesek />

</Layout>

)
};

export default HirPage3;