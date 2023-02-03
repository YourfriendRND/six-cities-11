import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should have ro render correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    );

    const pictureText = screen.getByAltText('6 cities logo');

    expect(pictureText).toBeInTheDocument();

  });
});
