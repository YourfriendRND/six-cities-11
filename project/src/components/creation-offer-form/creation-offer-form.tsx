/* eslint-disable no-console */
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Map from '../map/map';
import { DEFAULT_CITY, Limits, CitiesCenterLocation } from '../../const';
import './creation-offer-form.css';
import CreationFormName from './form-components/creation-form-name/creation-form-name';
import CreationFormDescription from './form-components/creation-form-description/creation-form-description';
import CreationFormCity from './form-components/creation-form-city/creation-form-city';
import CreationFormPlaceType from './form-components/creation-form-place-type/creation-form-place-type';
import CreationFormFacility from './form-components/creation-form-facility/creation-form-facility';
import CreationFormRoomCount from './form-components/creation-form-room-count/creation-form-room-count';

const CreationOfferForm = (): JSX.Element => {

  const { register } = useForm();
  const [selectedCity] = useState(DEFAULT_CITY);
  const [photoCollection, setPhotoCollection] = useState<File[]>([]);

  const changePhotoCollection = (evt: ChangeEvent<HTMLInputElement>, photoIdx: number): void => {
    console.log(evt);
    console.log(evt.target.files);
    console.log(photoIdx);

    if (evt.target.files) {
      const updatedPhotoCollection = [...photoCollection];
      updatedPhotoCollection[photoIdx] = evt.target.files[0];
      setPhotoCollection(updatedPhotoCollection);
    }
  };

  return (
    <form className='creation-offer-form' action="">
      <CreationFormName />

      <CreationFormDescription />

      <CreationFormCity />

      <CreationFormPlaceType />

      <CreationFormFacility />

      <CreationFormRoomCount />

      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className='creation-offer-form__field-label'>Please, enter the maximum number of guests (min 1, max 10): </label>
        <input
          {...register('guestCount', { required: true })}
          className="sign-up__input form__input"
          name="roomCount"
          type="number"
          placeholder="3"
          max={10}
          min={1}
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className='creation-offer-form__field-label'>Please, enter the price of your offer (min 100, max 100 000): </label>
        <input
          {...register('price', { required: true })}
          className="sign-up__input form__input"
          name="roomCount"
          type="number"
          placeholder="5000"
          max={100_000}
          min={100}
        />
      </div>

      <span className="creation-offer-form__photos-title">Please, add pictures of your place (6 pictures is required. The first picture will be used as a preview): </span>
      <div className="sign-up__input-wrapper form__input-wrapper creation-offer-form__upload-photos-wrapper">
        {Array.from({length: Limits.MaxPhotosOnPage}, (_, idx) => (
          <label key={idx} htmlFor={`photos-${idx}`} className="creation-offer-form__upload-preview">
            <div className="creation-offer-form__upload-preview-wrapper creation-offer-form__upload-preview-wrapper--induced">
              {photoCollection[idx] ? <img src={URL.createObjectURL(photoCollection[idx])} alt="preview" width="220" height="180" /> : null}
            </div>
            {
              <input
                {...register('photos')}
                id={`photos-${idx}`}
                className="visually-hidden sign-up__input form__input"
                name={`photos-${idx}`}
                type="file"
                onChange={(evt) => changePhotoCollection(evt, idx)}
              />
            }
          </label>
        ))}

      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <input
          {...register('coordinates', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="coordinates"
        />
      </div>
      <Map
        city={CitiesCenterLocation[selectedCity]}
        points={[]}
        selectedPlaceId={''}
        isMainPage={false}
        isNewPlace
      />
      <button
        className='creation-offer-form__submit-button button'
        type='submit'
        onSubmit={(evt) => evt.preventDefault()}
      >
          Create new offer
      </button>
    </form>
  );
};

export default CreationOfferForm;
