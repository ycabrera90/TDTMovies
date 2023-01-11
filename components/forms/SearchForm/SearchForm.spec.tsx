import SearchForm from './SearchForm';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('SearchForm', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<SearchForm />);
    expect(getByTestId('SearchForm')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(<SearchForm className="test-class" />);
    expect(getByTestId('SearchForm')).toHaveClass('test-class');
  });
});
