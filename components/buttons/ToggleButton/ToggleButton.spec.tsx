import { render } from '@testing-library/react';
import ToggleButton from './ToggleButton';

const mockClick = jest.fn();

describe('ToggleButton', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<ToggleButton clicked />);
    expect(getByTestId('ToggleButton')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(
      <ToggleButton className="test-class" clicked />
    );
    expect(getByTestId('ToggleButton')).toHaveClass('test-class');
  });

  it('the onClick props should be executed when click on the component', () => {
    const { getByTestId } = render(
      <ToggleButton onClick={mockClick} clicked />
    );
    getByTestId('ToggleButton').click();
    expect(mockClick).toBeCalledTimes(1);
  });

  it('the component should be render with the correct className when clicked is true', () => {
    const { getByTestId } = render(<ToggleButton clicked={true} />);
    expect(getByTestId('ToggleButton')).toHaveClass('expanded');
  });

  it('the component should be render with the correct className when clicked is false', () => {
    const { getByTestId } = render(<ToggleButton clicked={false} />);
    expect(getByTestId('ToggleButton')).not.toHaveClass('expanded');
  });
});
