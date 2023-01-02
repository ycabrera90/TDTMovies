import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddRemButton, { IAddRemButton } from './AddRemButton';

let onClickHandlerTypeArgument: IAddRemButton['type'];

interface IProps {
  type: IAddRemButton['type'][];
}

const props: IProps = {
  type: ['add', 'remove'],
};

describe('AddRemButton', () => {
  props.type.forEach((propsType) => {
    test(`render when props.type === ${propsType}`, () => {
      render(<AddRemButton type={propsType} />);
      expect(
        screen.getByTestId(`${propsType}-button`)
      ).not.toBeEmptyDOMElement();
    });

    test(`onClick function pass type parameter === ${propsType} when prop.type === ${propsType}`, () => {
      render(
        <AddRemButton
          type={propsType}
          onClick={(type) => {
            onClickHandlerTypeArgument = type;
          }}
        />
      );
      screen.getByTestId(`${propsType}-button`).click();
      expect(onClickHandlerTypeArgument).toBe(propsType);
    });
  });
});
