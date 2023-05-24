import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import List from './list';

it('renders correctly', () => {
  const mockStore = {
    exchange: {
      image1: 'mock-image1-url',
      image2: 'mock-image2-url',
      convert: {
        query: {
          from: 'USD',
          to: 'EUR',
        },
        result: 1.23,
      },
      latest: {
        rates: {
          EUR: 0.89,
          GBP: 0.73,
          JPY: 110.23,
        },
      },
    },
  };

  const tree = renderer
    .create(
      <BrowserRouter>
        <List exchange={mockStore} />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
