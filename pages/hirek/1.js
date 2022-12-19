import Layout from "../../components/layout";
import usetranslation from "next-translate/usetranslation";
import Link from "next/link"
import Megjelenesek from '../../components/Hirek/Megjelenesek';
import HirekNav from '../../components/Hirek/HirekNav';
import HirekItems from '../../components/Hirek/HirekItems'




function HirPage1(){

  const { t } = usetranslation();

    return(
  
        
<Layout>   
<div className = "hirek_container" >
<div className = "hirek_container_box">

<div >
<HirekItems
src={t("translation:hir10_kep")}
datum={t("translation:hir10_datum")}
title={t("translation:hir10_cim")}
text={t("translation:hir10_szoveg_bevezetes")}
path={t("translation:hir10_path")}
/>
</div> 


<div >
<HirekItems
src={t("translation:hir11_kep")}
datum={t("translation:hir11_datum")}
title={t("translation:hir11_cim")}
text={t("translation:hir11_szoveg_bevezetes")}
path={t("translation:hir11_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir12_kep")}
datum={t("translation:hir12_datum")}
title={t("translation:hir12_cim")}
text={t("translation:hir12_szoveg_bevezetes")}
path={t("translation:hir12_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir13_kep")}
datum={t("translation:hir13_datum")}
title={t("translation:hir13_cim")}
text={t("translation:hir13_szoveg_bevezetes")}
path={t("translation:hir13_path")}
/>
</div> 

<div >
<HirekItems
src={t("translation:hir14_kep")}
datum={t("translation:hir14_datum")}
title={t("translation:hir14_cim")}
text={t("translation:hir14_szoveg_bevezetes")}
path={t("translation:hir14_path")}
/>
</div> 




</div> 

</div>
<HirekNav />
<Megjelenesek />

</Layout>
)
};

export default HirPage1;