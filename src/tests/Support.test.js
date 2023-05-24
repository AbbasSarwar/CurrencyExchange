import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Support from './Support';

describe('Support Displat', () => {
  const exchange = {
    AMD: {
      availableFrom: '2009-09-28',
      availableUntil: '2023-05-24',
      countryCode: 'AM',
      countryName: 'Armenia',
      currencyCode: 'AMD',
      currencyName: 'Armenian Dram',
      icon: 'https://currencyfreaks.com/photos/flags/amd.png',
      status: 'AVAILABLE',
    },
    ACH: {
      availableFrom: '2009-09-28',
      availableUntil: '2023-05-24',
      countryCode: 'ACH',
      countryName: 'Global',
      currencyCode: 'CYRPTO',
      currencyName: 'Alchemy Pay',
      icon: 'https://currencyfreaks.com/photos/flags/amd.png',
      status: 'AVAILABLE',
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Support exchange={exchange} error="" status={exchange.AMD.status} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
