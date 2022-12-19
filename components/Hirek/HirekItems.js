import useTranslation from "next-translate/useTranslation";
import Link from "next/link"
import Image from 'next/image'

function HirekItems(props) {

    const { t } = useTranslation();

  return (

      <div className="hirek i18n" data-i18n="[html]content.body">
          <Link href={props.path}>
          <img
            className='hirek_img'
            alt='hírek kép'
            src={props.src}
            
            />
            </Link>
          <div className='hirek_szoveg'>
              <p className="hirek_datum">{props.datum}</p>
                <Link className="title_decoration" href={props.path}>
                  <h5 className='hirek_title' >{props.title}</h5>
                </Link>
            <p className='hirek_text'>{props.text}</p>
            <p className='hirek_text'>{props.text_2}</p>
            <div className="hirek_link">

            <Link href={props.path}>{t("translation:tovabb")}
        </Link>
            </div>

        
            </div>
      </div>
  );
}

export default HirekItems;