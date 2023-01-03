import { render } from '@testing-library/react';
import FavoritesButton from './FavoritesButton';

const mockFuntion: jest.Mock = jest.fn();

describe('FavoritesButton', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<FavoritesButton amount={0} />);
    expect(getByTestId('FavoritesButton')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(
      <FavoritesButton amount={0} className="test-class" />
    );
    expect(getByTestId('FavoritesButton')).toHaveClass('test-class');
  });

  it('the onClick props should be excecuted when click on component', ()=>{
    const {getByTestId} = render(<FavoritesButton amount={0} onClick={mockFuntion}/>);
    getByTestId('FavoritesButton').click();
    expect(mockFuntion).toBeCalledTimes(1);
  })

  it('the componente should be render with the correct amount', () => {
    const { getByText, rerender } = render(<FavoritesButton amount={10} />);
    expect(getByText('10')).toBeInTheDocument();
    rerender(<FavoritesButton amount={11} />);
    expect(getByText('11')).toBeInTheDocument();
  });
});
