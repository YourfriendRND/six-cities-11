import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthFormErrorMessage from './auth-form-error-message';

describe('Component: AuthFormErrorMessage', () => {
  const incorrectEmail = 'email';
  const incorrectPassword = 'password';

  it('should have to render correct message if email field is not correct', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <AuthFormErrorMessage incorrectField={incorrectEmail} />
        </BrowserRouter>
      </HelmetProvider>
    );

    const errorMessage = screen.getByText('Sorry, we couldn\'t authorized you by this email, possibly your email is not correct, please check it and try again');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should have to render correct message if password field is not correct', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <AuthFormErrorMessage incorrectField={incorrectPassword} />
        </BrowserRouter>
      </HelmetProvider>
    );

    const errorMessage = screen.getByText('The password invalid. The password should have 1 letter and 1 number');
    expect(errorMessage).toBeInTheDocument();
  });

});

