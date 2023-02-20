import { render } from "@testing-library/react";
import SearchButton from "./SearchButton";

const mockFuntion: jest.Mock = jest.fn();

describe('SearchButton', () => {
  it('the component should be render with dom content inside of it', () => {
    const { getByTestId } = render(<SearchButton />);
    expect(getByTestId('SearchButton')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct className', () => {
    const { getByTestId } = render(<SearchButton className="test-class" />);
    expect(getByTestId('SearchButton')).toHaveClass('test-class');
  });

  it('the onClick props should be excecuted when click on component', () => {
    const { getByTestId } = render(<SearchButton onClick={mockFuntion} />);
    getByTestId('SearchButton').click();
    expect(mockFuntion).toBeCalledTimes(1);
  });
});