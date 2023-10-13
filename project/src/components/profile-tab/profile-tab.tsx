import cn from 'classnames';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { setActiveProfileTab } from '../../store/user-process/user-process';

type ProfileTabProps = {
  tab: string;
  activeTab: string;
};

const ProfileTab = ({tab, activeTab}: ProfileTabProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleTabClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setActiveProfileTab(tab));
  };

  return (
    <li className='locations__item'>
      <a className={cn(
        'locations__item-link',
        'tabs__item',
        {'tabs__item--active': tab === activeTab}
      )}
      href="/#"
      onClick={handleTabClick}
      >
        <span>{tab}</span>
      </a>
    </li>
  );

};

export default ProfileTab;
