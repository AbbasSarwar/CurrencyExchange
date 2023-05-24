import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Support = (props) => {
  const { exchange, error } = props;
  const Ref = Object.values(exchange);

  if (typeof error === 'string' && error.length > 0) {
    return error;
  }

  return (
    <section className="support">
      <div className="supportContainer">
        <h1>Support Currencies</h1>
        <ul className="supportList">
          {Ref.map((item) => {
            const {
              currencyName,
              countryCode,
              icon,
              availableFrom,
              availableUntil,
              status,
            } = item;

            return (
              <li className="supportedshow" key={uuidv4()}>
                <img src={icon} alt="" />
                <p>{currencyName}</p>
                <p>{countryCode}</p>
                <p className="date">
                  {availableFrom}
                  {' '}
                  -
                  {availableUntil}
                </p>
                <p className="status">{status}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Support.propTypes = {
  exchange: PropTypes.shape({
    AMD: PropTypes.shape({
      availableFrom: PropTypes.string.isRequired,
      availableUntil: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
      currencyCode: PropTypes.string.isRequired,
      currencyName: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    ACH: PropTypes.shape({
      availableFrom: PropTypes.string.isRequired,
      availableUntil: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
      currencyCode: PropTypes.string.isRequired,
      currencyName: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Support.defaultProps = {
  error: '',
};

export default Support;
