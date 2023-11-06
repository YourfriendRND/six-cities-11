import CreationFormName from './form-components/creation-form-name/creation-form-name';
import CreationFormDescription from './form-components/creation-form-description/creation-form-description';
import CreationFormCity from './form-components/creation-form-city/creation-form-city';
import CreationFormPlaceType from './form-components/creation-form-place-type/creation-form-place-type';
import CreationFormFacility from './form-components/creation-form-facility/creation-form-facility';
import CreationFormRoomCount from './form-components/creation-form-room-count/creation-form-room-count';
import CreationFormGuestCount from './form-components/creation-form-guest-count/creation-form-guest-count';
import CreationFormPrice from './form-components/creation-form-price/creation-form-price';
import CreationFormPhotoCollection from './form-components/creation-form-photo-collection/creation-form-photo-collection';
import CreationFormCoordinates from './form-components/creation-form-coordinates/creation-form-coordinates';
import './creation-offer-form.css';
import { FormEvent } from 'react';

const CreationOfferForm = (): JSX.Element => {
  const submitOfferCreation = (evt: FormEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
  };

  return (
    <form className='creation-offer-form' action="">
      <CreationFormName />

      <CreationFormDescription />

      <CreationFormCity />

      <CreationFormPlaceType />

      <CreationFormFacility />

      <CreationFormRoomCount />

      <CreationFormGuestCount />

      <CreationFormPrice />

      <CreationFormPhotoCollection />

      <CreationFormCoordinates />

      <button
        className='creation-offer-form__submit-button button'
        type='submit'
        onSubmit={submitOfferCreation}
      >
          Create new offer
      </button>
    </form>
  );
};

export default CreationOfferForm;
