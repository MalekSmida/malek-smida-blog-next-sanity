import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// local files
import Home from '../pages/index';
import { mockNextUseRouter } from '../__mocks__/useRouter';

describe('Home', () => {
  it('Should renders home page', () => {
    // Mocks Next.js route
    mockNextUseRouter({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    });

    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /wanderer/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
