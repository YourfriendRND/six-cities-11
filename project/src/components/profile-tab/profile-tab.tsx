type ProfileTabProps = {
  tab: string;
  activeTab: string;
};

const ProfileTab = ({tab, activeTab}: ProfileTabProps): JSX.Element => (
  <li className='locations__item'>
    <a className='locations__item-link tabs__item tabs__item--active' href="/#">
      <span>About me</span>
    </a>
  </li>
);

export default ProfileTab;
