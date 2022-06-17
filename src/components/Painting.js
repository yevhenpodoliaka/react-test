import PropTypes from 'prop-types';
import defaultImg from './default.jpg'
 function Painting({
  imgUrl = defaultImg,
  title,
  price,
  author = 'Не відомо',
  authorUrl,
  quantity,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{author}</a>
      </p>
      <p>Вартість: {price} кредитів</p>
      <p>На складі :{quantity<10? 'закінчується':' є в наявності'}</p>
      <button type="button">Додати до кошика</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default Painting;