import { fireEvent, render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('the component should be render', () => {
    const { getByTestId } = render(<SearchInput />);
    expect(getByTestId('SearchInput')).toBeInTheDocument();
  });

  it('the component should be render with the correct class name', () => {
    const { getByTestId } = render(<SearchInput className="test" />);
    expect(getByTestId('SearchInput')).toHaveClass('test');
  });

  it('the component should be render with the correct value', () => {
    const { getByTestId } = render(<SearchInput value="test" />);
    expect(getByTestId('SearchInput')).toHaveValue('test');
  });

  it('when do change on input the onChange prop should be executed', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<SearchInput onChange={mockOnChange} />);
    fireEvent.change(getByTestId('SearchInput'), { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange.mock.calls[0][0].target.value).toBe('test');
  });
});
