import ProfileTab from '../profile-tab/profile-tab';
import { useAppSelector } from '../../hooks/store';
import { getActiveProfileTab } from '../../store/user-process/selectors';

type ProfileTabsListProps = {
  tabs: string[];
};

const ProfileTabsList = ({ tabs }: ProfileTabsListProps): JSX.Element => {
  const activeTab = useAppSelector(getActiveProfileTab);

  return (
    <ul className='locations__list tabs__list'>
      {tabs.map((tab) => <ProfileTab key={tab} tab={tab} activeTab={activeTab} />)}
    </ul>
  );
};

export default ProfileTabsList;
