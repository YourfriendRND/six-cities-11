import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <Spinner />
      </HelmetProvider>
    );

    const mainSpinnerWrapper = screen.getByTestId('spinner-main-wrapper');
    const spinnerContent = screen.getByTestId('spinner-content');

    expect(mainSpinnerWrapper).toBeInTheDocument();
    expect(spinnerContent).toBeInTheDocument();

  });
});

