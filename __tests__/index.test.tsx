import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    // const heading = screen.getByText('welcome to next')
    const heading = screen.getByRole('heading', {
      name: 'welcome to this project',
    });

    expect(heading).toBeInTheDocument();
  });
});
