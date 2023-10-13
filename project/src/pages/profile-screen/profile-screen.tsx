import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import PageHeader from '../../components/page-header/page-header';
import Footer from '../../components/footer/footer';
import ProfileTabsList from '../../components/profile-tabs-list/profile-tabs-list';
import ProfileContent from '../../components/profile-content/profile-content';
import { useAppSelector } from '../../hooks/store';
import { getUser, getActiveProfileTab } from '../../store/user-process/selectors';
import { AppRoute, ProfileTabs } from '../../const';
import './profile-screen.css';

const ProfileScreen = (): JSX.Element => {
  const user = useAppSelector(getUser);
  const activeTab = useAppSelector(getActiveProfileTab);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Your favorite places</title>
      </Helmet>

      <PageHeader isNavigationShown />

      <main className="page__main profile-page">
        <div className="tabs">
          <section className="locations container">
            <ProfileTabsList tabs={Object.values(ProfileTabs)}/>
          </section>
        </div>
        {user ? <ProfileContent activeTab={activeTab} user={user} /> : <Navigate to={AppRoute.Login} />}
      </main>

      <Footer />
    </div>
  );
};

export default ProfileScreen;
