import { screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthForm from './auth-form';
import { Provider } from 'react-redux';
import store from '../../store/store';
import userEvent from '@testing-library/user-event';

describe('Component: AuthForm', () => {
  it('should have to render correctly', async () => {
    const testAccount = {email: 'user@yandex.ru', password: '123456'};

    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <AuthForm />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );

    const email = screen.getByPlaceholderText(/Email/i);
    const password = screen.getByPlaceholderText(/Password/i);
    const signInSubmit = screen.getByText('Sign in');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signInSubmit).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('Email'), testAccount.email);
    await userEvent.type(screen.getByTestId('Password'), testAccount.password);

    expect(screen.getByDisplayValue(/user@yandex.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

  });
});


