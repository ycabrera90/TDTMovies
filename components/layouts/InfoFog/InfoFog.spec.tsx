import { render } from '@testing-library/react';
import InfoFog from './InfoFog';

describe('InfoFog', () => {
  it('the component should be render with DOM content inside of it', () => {
    const { getByTestId } = render(
      <InfoFog title="Test" overview="TestOverview" />
    );
    expect(getByTestId('InfoFog')).not.toBeEmptyDOMElement();
  });

  it('the component should be render with the correct class name', () => {
    const { getByTestId } = render(
      <InfoFog title="Test" overview="TestOverview" className="test" />
    );
    expect(getByTestId('InfoFog')).toHaveClass('test');
  });

  it('the component should be render with the correct title', () => {
    const { getByTestId } = render(
      <InfoFog title="Test" overview="TestOverview" />
    );
    expect(getByTestId('InfoFog')).toHaveTextContent('Test');
  });

  it('the component should be render with the correct overview', () => {
    const { getByTestId } = render(
      <InfoFog title="Test" overview="TestOverview" />
    );
    expect(getByTestId('InfoFog')).toHaveTextContent('TestOverview');
  });
});
