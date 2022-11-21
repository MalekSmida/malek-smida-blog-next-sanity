import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as nextRouter from 'next/router';

// local files
import Home from '../pages/index';

// Next router mock
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
