import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import CityList from './city-list';
import store from '../../store/store';
import { CITIES } from '../../const';

describe('Component: CityList', () => {
  it('should have to render correctly', () => {

    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <CityList cities={CITIES}/>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const listElementContainer = screen.getByRole('list');
    expect(listElementContainer).toBeInTheDocument();

    const allListItems = screen.getAllByRole('listitem');
    expect(allListItems.length).toBe(CITIES.length);

  });
});

