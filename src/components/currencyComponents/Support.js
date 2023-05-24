import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FetchData } from '../../redux/APIs';

const Support = () => {
  const { exchange, error, status } = useSelector((state) => state.exchange);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(FetchData());
  }, [Dispatch]);
  const Ref = Object.values(exchange);
  if (error) {
    return error;
  }
  if (status) {
    return <p className="Loading">...Loading...</p>;
  }
  return (
    <section className="support">
      <div className="supportContainer">
        <h1>Support Currencies</h1>
        <ul className="supportList">
          {
            Ref.map((item) => {
              const {
                currencyName, countryCode, icon,
                availableFrom, availableUntil,
                status,
              } = item;
              return (
                <li className="supprtedshow" key={uuidv4()}>
                  <img src={icon} alt="" />
                  <p>{currencyName}</p>
                  <p>{countryCode }</p>
                  <p className="date">
                    {availableFrom}
                    {'  '}
                    -
                    {'  '}
                    {availableUntil}
                  </p>
                  <p className="status">{status}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
};
export default Support;
