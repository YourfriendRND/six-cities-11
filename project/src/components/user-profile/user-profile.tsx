import { User } from '../../types/user-type';
import './user-profile.css';

type UserProfileProps = {
  user: User;
};

const UserProfile = ({ user }: UserProfileProps): JSX.Element => (
  <div className="user-profile-container container">
    <div className='user-avatar'>
      <img className='avatar' src={user.avatarUrl ? user.avatarUrl : '../img/default-avatar.png'} width="170" height="170" alt="avatar" />
      <div className="profile__user-status">{user.isPro ? 'Pro' : ''}</div>
    </div>

    <div className='profile'>
      <div className='profile__user-name'>
        <span>{user.name}</span>
      </div>
      <div className='profile__user-email'>
        <span>Email: <i>{user.email}</i></span>
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
);

export default UserProfile;
