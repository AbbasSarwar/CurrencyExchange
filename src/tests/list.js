import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const List = (props) => {
  const {
    image1, image2, convert, latest,
  } = props;
  return (
    <section className="listContainer">
      <div className="equalto">
        <h1>Conversion</h1>
        <div className="changing">
          <div className="imags">
            <img src={image1} alt="" />
            {' '}
            {convert?.query?.from}
          </div>
          <p>{convert?.result ? convert.result : 'If you found no value then possible thats are not available to convert'}</p>
          <div className="imags">
            {convert?.query?.to}
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
      <ul className="list">
        <div className="displaytop">
          <h2>Currency Code</h2>
          <h2>USD converted</h2>
          <h2>Currencies</h2>
        </div>
        {latest && latest.rates && Object.entries(latest.rates).map(([currency, rate]) => (
          <li className="listitem" key={uuidv4()}>
            <p>{currency}</p>
            <p>{rate}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

List.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  convert: PropTypes.shape({
    query: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    result: PropTypes.number.isRequired,
  }).isRequired,
  latest: PropTypes.shape({
    rates: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};
export default List;
