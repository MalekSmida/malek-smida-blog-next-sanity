import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// local files
import Home from '../pages/index';
import { mockNextUseRouter } from '../__mocks__/useRouter';

describe('Home', () => {
  it('renders a heading', () => {
    // Mocks Next.js route
    mockNextUseRouter({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    });

    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
