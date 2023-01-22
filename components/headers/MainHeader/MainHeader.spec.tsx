import { render } from '@testing-library/react';
import MainHeader from './MainHeader';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import useDomMock from '@/mocks/useDom.mock';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('@/hooks/useDOM', () => ({
  __esModule: true,
  default: jest.fn(() => useDomMock),
}));

jest.mock('@/styles/breakpoints.module.scss', () => {
  return {
    __esModule: true,
    default: {
      smSreens: '640',
    },
  };
});

describe('MainHeader', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MainHeader />
      </Provider>
    );
    expect(getByTestId('MainHeader')).not.toBeEmptyDOMElement();
  });

  it('the tdt icon should be render', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MainHeader />
      </Provider>
    );
    expect(getByTestId('TDTIcon')).toBeInTheDocument();
  });

  it('the search form should be render', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MainHeader />
      </Provider>
    );
    expect(getByTestId('SearchForm')).toBeInTheDocument();
  });
});
