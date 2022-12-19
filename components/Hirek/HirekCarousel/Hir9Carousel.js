import { Carousel } from 'react-responsive-carousel';
import useTranslation from "next-translate/useTranslation";


function Hir9Carousel(){
        return (
            <Carousel>
                
                <div>
<img src="/images/slider/63.jpg" className="slider"  alt="rólunk képek"/>
</div>
                <div>
<img src="/images/slider/64.jpg" className="slider"  alt="rólunk képek"/>
</div>
                <div>
<img src="/images/slider/65.jpg" className="slider"  alt="rólunk képek"/>
</div>



                
            </Carousel>
        );
    }
  

  
export default Hir9Carousel;  

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>