import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import SignOut from './sign-out';
import store from '../../store/store';

describe('Component: SignOut', () => {
  it('should have to render correctly', () => {

    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <SignOut />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const buttonText = screen.getByText('Sign out');

    expect(buttonText).toBeInTheDocument();

  });
});
