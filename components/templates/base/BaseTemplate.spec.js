// v1.0.6
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BaseTemplate from './BaseTemplate';

describe('BaseTemplate Component', () => {
  test('render sampleTextProp', () => {
    // assert
    render(<BaseTemplate sampleTextProp="this is only a template" />);

    // action
    // Nothing in this moment

    // Assert
    expect(screen.getByTestId('BaseTemplate')).not.toBeEmptyDOMElement(); 
  });
});
