
type ProfileTabsListProps = {
  tabs: string[];
  activeTab: string;
};

const ProfileTabsList = ({tabs, activeTab}: ProfileTabsListProps): JSX.Element => <ul className='locations__list tabs__list'></ul>;

export default ProfileTabsList;
