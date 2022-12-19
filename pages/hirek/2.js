import Layout from "../../components/layout";
import usetranslation from "next-translate/usetranslation";
import Link from "next/link"
import Megjelenesek from '../../components/Hirek/Megjelenesek';
import HirekNav from '../../components/Hirek/HirekNav';
import HirekItems from '../../components/Hirek/HirekItems'




function HirPage2(){

  const { t } = usetranslation();

    return(
  
        
<Layout>   
<div className = "hirek_container ">
<div className = "hirek_container_box">

<div >
<HirekItems
src={t("translation:hir5_kep")}
datum={t("translation:hir5_datum")}
title={t("translation:hir5_cim")}
text={t("translation:hir5_szoveg_bevezetes")}
path={t("translation:hir5_path")}
/>
</div> 
<div >
<HirekItems
src={t("translation:hir6_kep")}
datum={t("translation:hir6_datum")}
title={t("translation:hir6_cim")}
text={t("translation:hir6_szoveg_bevezetes")}
path={t("translation:hir6_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir7_kep")}
datum={t("translation:hir7_datum")}
title={t("translation:hir7_cim")}
text={t("translation:hir7_szoveg_bevezetes")}
path={t("translation:hir7_path")}
/>
</div> 


<div >
<HirekItems
src={t("translation:hir8_kep")}
datum={t("translation:hir8_datum")}
title={t("translation:hir8_cim")}
text={t("translation:hir8_szoveg_bevezetes")}
path={t("translation:hir8_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir9_kep")}
datum={t("translation:hir9_datum")}
title={t("translation:hir9_cim")}
text={t("translation:hir9_szoveg_bevezetes")}
path={t("translation:hir9_path")}
/>
</div> 




</div> 

</div>


<HirekNav />
<Megjelenesek />

</Layout>

)
};

export default HirPage2;