import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CityPlacesStub from './city-places-stub';
import { ServerResponseActions } from '../../const';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Component: CityPlacesStub', () => {
  it('should have to render error stub', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <CityPlacesStub action={ServerResponseActions.Error} />
        </BrowserRouter>
      </HelmetProvider>
    );

    const errorMesasgeStatus = screen.getByText('Network Error');
    const errorDescription = screen.getByText('Sorry, we could not get any property available from server at the moment. Please, try it again later');
    expect(errorMesasgeStatus).toBeInTheDocument();
    expect(errorDescription).toBeInTheDocument();
  });

  it('should have to render loading stub as preloader', () => {
    render(

      <HelmetProvider>
        <BrowserRouter>
          <CityPlacesStub action={ServerResponseActions.Loading} />
        </BrowserRouter>
      </HelmetProvider>
    );

    const mainSpinnerWrapper = screen.getByTestId('spinner-main-wrapper');
    const spinnerContent = screen.getByTestId('spinner-content');

    expect(mainSpinnerWrapper).toBeInTheDocument();
    expect(spinnerContent).toBeInTheDocument();

  });

  it('should have to render empty stub', () => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <CityPlacesStub action={ServerResponseActions.NoContent} />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const emptyStatusMessage = screen.getByText('No places to stay available');
    const spinnerContent = screen.queryByTestId('spinner-content');

    const errorMesasgeStatus = screen.queryByText('Network Error');

    expect(emptyStatusMessage).toBeInTheDocument();
    expect(spinnerContent).not.toBeInTheDocument();
    expect(errorMesasgeStatus).not.toBeInTheDocument();

  });
});


