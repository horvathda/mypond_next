import { Carousel } from 'react-responsive-carousel';
import useTranslation from "next-translate/useTranslation";


function Hir14Carousel(){
        return (
            <Carousel>
                
                <div>
<img src="/images/slider/70.jpg" className="slider"  alt="rólunk képek"/>
</div>
                <div>
<img src="/images/slider/71.jpg" className="slider"  alt="rólunk képek"/>
</div>
               
                
            </Carousel>
        );
    }
  

  
export default Hir14Carousel;  

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>