import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CityItem from './city-item';
import { CITIES } from '../../const';
import { randomInt } from '../../util';

describe('Component: City-Item', () => {
  it('should have to render correctly', () => {
    const currentCity = CITIES[randomInt(0, CITIES.length - 1)];
    const activeCity = CITIES[randomInt(0, CITIES.length - 1)];

    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <CityItem cityName={currentCity} activeCity={activeCity} />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const cityElementText = screen.getByText(currentCity);
    const itemElement = screen.getByRole('listitem');

    expect(cityElementText).toBeInTheDocument();
    expect(itemElement).toHaveClass('locations__item');

  });
});

