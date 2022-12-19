import useTranslation from "next-translate/useTranslation";



export default function Logok(){

    const { t } = useTranslation();
 

    return(
    <React.Fragment> 
        <div>



          <div>
                <h2 className="logo_title partnereink">
                     Logok
                 </h2>
           </div>


           <div className="logo_container_new">
<div className="logo_sor1">
    <a href="#" target="_blank" rel="noopener noreferrer">
    <img src="/images/logok/logo_new/kép1.jpg" alt="logo" width="auto" height="360"  className="logo_partner" />
    </a>
</div>
<div className="logo_box">
    <a href="#" target="_blank" rel="noopener noreferrer">

    <img src="/images/logok/logo_new/kép2.jpg" alt="logo" width="auto" height="360" className="logo_partner" />
    </a>
    </div> 
<div className="logo_box">
    <a href="#" target="_blank" rel="noopener noreferrer">

    <img src="/images/logok/logo_new/kép3.jpg" alt="logo" width="auto" height="360" className="logo_partner" />
    </a>
    </div> 
<div className="logo_box">
    <a href="#" target="_blank" rel="noopener noreferrer">

    <img src="/images/logok/logo_new/kép4.jpg" alt="logo" width="auto" height="360" className="logo_partner" />
    </a>

    </div> 

<div className="logo_box">
    <a href="#" target="_blank" rel="noopener noreferrer">

    <img src="/images/logok/logo_new/kép5.jpg" alt="logo" width="auto" height="360" className="logo_partner" />
    </a>
    </div> 
</div>

        </div>
    </React.Fragment>
     );
    }

