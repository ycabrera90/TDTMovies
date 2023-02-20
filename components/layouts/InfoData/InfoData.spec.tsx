import { render } from '@testing-library/react';
import InfoData from './InfoData';

describe('InfoData', () => {
  it('the component should be render with DOM content inside of it', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" />
    );
    expect(getByTestId('InfoData')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with DOM content inside of it', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" />
    );
    expect(getByTestId('InfoData')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct class name', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" className="test" />
    );
    expect(getByTestId('InfoData')).toHaveClass('test');
  });

  it('the component should be render with the correct tag', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" />
    );
    expect(getByTestId('InfoData')).toHaveTextContent('Test:');
  });

  it('the component should be render with the correct value', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" />
    );
    expect(getByTestId('InfoData')).toHaveTextContent('200.000');
  });

  it('the component should be render with the correct unit', () => {
    const { getByTestId } = render(
      <InfoData tag="Test" value={200000} unit="min" />
    );
    expect(getByTestId('InfoData')).toHaveTextContent('min');
  });
});
