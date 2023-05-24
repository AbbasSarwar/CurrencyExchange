import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../Styles.module.css';
import { LatestData } from '../../redux/APIs';

const List = () => {
  const Dispatch = useDispatch();
  const image1 = useSelector((state) => state.exchange.image1);
  const image2 = useSelector((state) => state.exchange.image2);

  useEffect(() => {
    Dispatch(LatestData());
  }, [Dispatch]);

  const { convert, latest } = useSelector((state) => state.exchange);
  return (
    <section className="listContainer">
      <div className="equalto">
        <h1>Conversion</h1>
        <div className="changing">
          <div className="imags">
            <img src={image1} alt="" />
            {' '}
            {convert?.query?.from}
            <span className="Amount">{convert?.query?.amount ? `Amount: ${convert.query.amount}` : ''}</span>
          </div>
          <p className={convert?.result ? '' : styles.falseLine}>{convert?.result ? convert.result : 'If you found no value then possible thats are not available to convert'}</p>
          <div className="imags">
            {convert?.query?.to}
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
      <ul className="list">
        <div className="displaytop">
          <h2>Currency Code</h2>
          <h2>$USD Latest Price</h2>
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

export default List;
