import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CloseButton from './CloseButton';

const mockOnClick: jest.Mock = jest.fn();

describe('CloseButton', () => {
  test(`render`, () => {
    render(<CloseButton />);
    expect(screen.getByTestId(`CloseButton`)).not.toBeEmptyDOMElement();
  });

  test(`render with className`, () => {
    render(<CloseButton className="test-class" />);
    expect(screen.getByTestId(`CloseButton`)).toHaveClass(`test-class`);
  });

  test(`render with onClick`, () => {
    render(<CloseButton onClick={mockOnClick} />);
    screen.getByTestId(`CloseButton`).click();
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
