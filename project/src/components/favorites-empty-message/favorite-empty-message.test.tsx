import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import FavoriteEmptyMessage from './favorites-empty-message';

describe('Component: FavoriteEmptyMessage', () => {
  it('should have to render correctly', () => {

    render(
      <HelmetProvider>
        <FavoriteEmptyMessage />
      </HelmetProvider>
    );

    const statusMessage = screen.getByText('Nothing yet saved.');
    const statusDescription = screen.getByText('Save properties to narrow down search or plan your future trips.');

    expect(statusMessage).toBeInTheDocument();
    expect(statusDescription).toBeInTheDocument();

  });
});

