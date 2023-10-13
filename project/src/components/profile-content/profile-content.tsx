import { User } from '../../types/user-type';
import { ProfileTabs } from '../../const';
import UserProfile from '../user-profile/user-profile';
import UserPublications from '../user-publications/user-publications';
import Favorites from '../favorites/favorites';

type ProfileContentProps = {
  activeTab: string;
  user: User;
}

const ProfileContent = ({ activeTab, user }: ProfileContentProps): JSX.Element => {
  switch(activeTab) {
    case ProfileTabs.Favorites: return <Favorites offers={[]}/>;
    case ProfileTabs.MyPublications: return <UserPublications />;
    default: return <UserProfile user={user} />;
  }
};

export default ProfileContent;
