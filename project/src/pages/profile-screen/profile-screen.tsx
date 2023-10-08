import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import Footer from '../../components/footer/footer';
import './profile-screen.css';

// const ProfileViews = ['About me', 'My publications', 'Favorites'];

const ProfileScreen = (): JSX.Element => (
  <div className="page">
    <Helmet>
      <title>6 cities. Your favorite places</title>
    </Helmet>

    <PageHeader isNavigationShown />

    <main className="page__main profile-page">
      <div className="tabs">
        <section className="locations container">
          <ul className='locations__list tabs__list'>

            <li className='locations__item'>
              <a className='locations__item-link tabs__item tabs__item--active' href="/#">
                <span>About me</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href="/#">
                <span>My publications</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href="/#">
                <span>Favorites</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="user-profile-container container">
        <div className='user-avatar'>
          <img className='avatar' src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png" width="170" height="170" alt="" />
        </div>

        <div className='profile'>
          <div className='profile__user-name'>
            <span>Алексей Поварешкин</span>
          </div>
          <div className='profile__user-email'>
            <span>Email: <i>kupeirc@gmail.com</i></span>
          </div>
          <div className='profile__user-avatar-controll'>
            <input
              id="avatar"
              className="visually-hidden profile__input form__input"
              name="avatar"
              type="file"
            />
            <label htmlFor="avatar" className="profile__input profile__input--avatar">
              <span className="profile__text-upload">
              Select avatar image...
              </span>
            </label>
            <button className='profile__user-avatar-button button'>
              Upload image
            </button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default ProfileScreen;
