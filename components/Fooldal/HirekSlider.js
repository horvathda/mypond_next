import HirekSliderItems from "./HirekSliderItems";
import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";



function HirekSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  const { t } = useTranslation();
  
  return (
    <div className="hirek-container">
        <Slider {...settings}>
          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir14_kep")}
              title={t("translation:hir14_cim")}
              text={t("translation:hir14_szoveg_slider")}
              path={t("translation:hir14_path_slider")}
              />
            
          </div>
          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir13_kep")}
              title={t("translation:hir13_slider_cim")}
              text={t("translation:hir13_szoveg_slider")}
              path={t("translation:hir13_path_slider")}
              />
            
          </div>

          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir12_kep")}
              title={t("translation:hir12_cim")}
              text={t("translation:hir12_szoveg_slider")}
              path={t("translation:hir12_path_slider")}
              />
            
          </div>
          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir11_kep")}
              title={t("translation:hir11_cim")}
              text={t("translation:hir11_szoveg_slider")}
              path={t("translation:hir11_path_slider")}
              />
            
          </div>
          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir10_kep")}
              title={t("translation:hir10_cim")}
              text={t("translation:hir10_szoveg_slider")}
              path={t("translation:hir10_path_slider")}
              />
            
          </div>
          <div className="slider">
          <HirekSliderItems
              src={t("translation:hir4_kep")}
              title={t("translation:hir4_cim")}
              text={t("translation:hir4_szoveg_slider")}
              path={t("translation:hir4_path_slider")}
              />
            
          </div>
          
          
          
          
        </Slider>
      </div>
    );
  };
  



export default HirekSlider;