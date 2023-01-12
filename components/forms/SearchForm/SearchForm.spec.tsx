import SearchForm from './SearchForm';
import { act, fireEvent, render } from '@testing-library/react';
import singletonRouter from 'next/router';

jest.mock('next/router', () => require('next-router-mock'));
const onSubmitFormHandler = jest.fn();

describe('SearchForm', () => {
  beforeEach(() => {
    onSubmitFormHandler.mockClear();
    singletonRouter.pathname = '';
  });

  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<SearchForm />);
    expect(getByTestId('SearchForm')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(<SearchForm className="test-class" />);
    expect(getByTestId('SearchForm')).toHaveClass('test-class');
  });

  it('when do click on search button the form has to submit', () => {
    const { getByTestId } = render(
      <SearchForm onSubmitted={onSubmitFormHandler} />
    );

    act(() => {
        getByTestId('SearchButton').click();
    });

    expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  });

  it('when submit, if the input is emty the app has to go to /home', () => {
    const { getByTestId } = render(<SearchForm />);

    act(() => {
      getByTestId('SearchButton').click();
    });

    expect(singletonRouter.pathname).toBe(`/home`);
  });

  it('when submit, if the input is not emty the app has to go to `/home/${encodeURIComponent(queryText.trim())}`', async () => {
    const { findByTestId } = render(<SearchForm />);

    const input = (await findByTestId('SearchInput')) as HTMLInputElement;

    await act(async () => {
      fireEvent.change(input, { target: { value: 'some test in the input' } });
      const button = await findByTestId('SearchButton');
      button.click();
    });

    expect(singletonRouter.pathname).toBe(
      `/home/${encodeURIComponent('some test in the input')}`
    );
  });
});
