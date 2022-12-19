import Link from 'next/link'

function KisokosItems(props) {
  return (
      <li className='cards__item'>
        <Link className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='card bg'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__title'>{props.title}</h5>
            <p className='cards__item___text'>{props.text}</p>
          </div>
        </Link>
      </li>
  );
}

export default KisokosItems;