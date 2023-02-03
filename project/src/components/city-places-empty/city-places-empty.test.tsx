import { screen, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store';
import CityPlaceListEmpty from './city-places-empty';
import { DEFAULT_CITY } from '../../const';


describe('Component: CityPlaceListEmpty', () => {
  it('should have to render correctly', () => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <CityPlaceListEmpty />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const statusText = screen.getByText('No places to stay available');
    expect(statusText).toBeInTheDocument();

    const description = screen.getByText(`We could not find any property available at the moment in ${DEFAULT_CITY}`);
    expect(description).toBeInTheDocument();

  });
});
