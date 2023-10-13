import './user-publications-empty.css';
import CreateOfferButton from '../create-offer-button/create-offer-button';

const UserPublicationsEmpty = (): JSX.Element => (
  <div className="published__status-wrapper">
    <div className='published__offer-button-wrapper'>
      <CreateOfferButton isEmptyPage />
    </div>
    <b className="published__status">Nothing yet published.</b>
    <p className="favorites__status-description">Complete and publish your first rental offer.</p>
  </div>
);

export default UserPublicationsEmpty;
