import { render } from '@testing-library/react';
import TDTIcon from './TDTIcon';

describe('TDTIcon', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<TDTIcon />);
    expect(getByTestId('TDTIcon')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct class name', () => {
    const { getByTestId } = render(<TDTIcon className="test" />);
    expect(getByTestId('TDTIcon')).toHaveClass('test');
  });

  it('Cuando haga clic en la imagen se debe ejecutar el accesorio de OnClick', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<TDTIcon onClick={mockOnClick} />);
    getByTestId('TDTIconImage').click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
