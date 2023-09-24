import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageHeader from '../../components/page-header/page-header';
import SignUpForm from '../../components/registration-form/sign-up-form';
import { getUserAuthStatus } from '../../store/user-process/selectors';
import { UserAuthStatus, AppRoute } from '../../const';
import './sign-up-screen.css';

const SignUpScreen = (): JSX.Element => {
  const navigate = useNavigate();
  const userAuthStatus = useSelector(getUserAuthStatus);

  useEffect(() => {
    if (userAuthStatus === UserAuthStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [navigate, userAuthStatus]);

  return (
    <div className="page page--gray page--sign-up">
      <Helmet>
        <title>6 cities. Sign Up</title>
      </Helmet>

      <PageHeader isNavigationShown={false} />

      <main className="page__main page__main--sign-up">
        <div className="page__sign-up-container container">
          <section className="sign-up">
            <h1 className="sign-up__title">Sign up</h1>
            <SignUpForm />
          </section>
          <section className="locations locations--sign-up locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Hamburg</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;
