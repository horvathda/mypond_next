import Link from "next/link"

function HirekSliderItems(props) {
  return (

        <Link className='hirek_slider_link' href={props.path}>
            <img
              className='hirek_slider_img'
              alt='hírek kép'
              src={props.src}
        
              />
          <div className='hirek_slider'>
            <h5 className='hirek_slider-title'>{props.title}</h5>
            <p className='hirek_slider-text'>{props.text}</p>
            </div>
        </Link>
  );
}

export default HirekSliderItems;