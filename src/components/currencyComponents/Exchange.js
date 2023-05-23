import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FetchData, GetData } from '../../redux/APIs';
import { add, add2 } from '../../redux/exchangeSlice';

const Exchange = () => {
  const dispatch = useDispatch();
  const { exchange } = useSelector((state) => state.exchange);
  const newData = Object.values(exchange);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const [selectedIcons, setSelectedIcons] = useState('');
  const [data, setData] = useState(0);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedCurrency = newData.find((item) => item.currencyCode === selectedValue);
    setSelectedOption(selectedValue);
    setSelectedIcon(selectedCurrency?.icon || '');
    dispatch(add(selectedCurrency?.icon || ''));
  };

  const handleSelectChanges = (event) => {
    const selectedValue = event.target.value;
    const selectedCurrency = newData.find((item) => item.currencyCode === selectedValue);
    setSelectedOptions(selectedValue);
    setSelectedIcons(selectedCurrency?.icon || '');
    dispatch(add2(selectedCurrency?.icon || ''));
  };

  const onChange = (e) => {
    setData(e.target.value);
  };
  const onSubmit = () => {
    if (selectedOption && selectedOptions) {
      dispatch(GetData({
        amount: data,
        from: selectedOption,
        to: selectedOptions,
      }));
    } else {
      dispatch(GetData({
        amount: data,
        from: 'AGLD',
        to: 'AGLD',
      }));
    }
    setSelectedOption('');
    setSelectedOptions('');
    setData('');
  };
  return (
    <div className="Exchange">
      <form action="#">
        <div className="formInside">
          <label htmlFor="amount">
            <span>Amount</span>
            <input type="number" onChange={onChange} value={data} name="amount" />
          </label>
          <label htmlFor="from">
            <span>From</span>
            <div className="selectors">
              <select name="from" id="from" value={selectedOption} onChange={handleSelectChange}>
                {newData.map((item) => {
                  const { currencyCode } = item;
                  return (
                    <option key={uuidv4()} value={currencyCode} label={currencyCode}>
                      {currencyCode}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <p className="equal">
            {selectedIcon && <img id="selectedIcon" src={selectedIcon} alt="" />}
            {' '}
            =
            {selectedIcons && <img id="selectedIcon" src={selectedIcons} alt="" />}
          </p>
          <label htmlFor="to">
            <span>To</span>
            <div className="selectors">
              <select name="to" id="to" value={selectedOptions} onChange={handleSelectChanges}>
                {newData.map((item) => {
                  const { currencyCode } = item;
                  return (
                    <option key={uuidv4()} value={currencyCode} label={currencyCode}>
                      {currencyCode}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
        </div>
        <input type="button" value="Convert" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default Exchange;
