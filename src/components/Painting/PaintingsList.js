import PropTypes from 'prop-types';
import Painting from './Painting';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            author={item.author.tag}
            authorUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.proppTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default PaintingList;
