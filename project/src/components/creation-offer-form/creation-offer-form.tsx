import cn from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CITIES, FACILITIES, HOUSING_TYPES, DEFAULT_CITY } from '../../const';
import './creation-offer-form.css';

const CreationOfferForm = (): JSX.Element => {
  const TEXT = 'Upload preview image of your place';
  const { register } = useForm();
  const [citySelectStatus, changeCitySelectStatus] = useState(true);
  const [selectedCity, changeSelectedCity] = useState(DEFAULT_CITY);
  const [previewImageValue, setPreviewImage] = useState(TEXT);
  const [housingTypeStatus, changeHousingTypeStatus] = useState(true);
  const [selectedHousingType, changeSelectedHousing] = useState(HOUSING_TYPES[0]);

  const selectOfferCity = (city: string): void => {
    changeSelectedCity(city);
    changeCitySelectStatus(!citySelectStatus);
  };

  const selectHousingType = (type: string): void => {
    changeSelectedHousing(type);
    changeHousingTypeStatus(!housingTypeStatus);
  };

  const changePrevieImageName = (evt: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-console
    console.log(evt.target.value.split('\\'));
    const fileName = evt.target.value.split('\\').at(-1);
    // eslint-disable-next-line no-console
    console.log(fileName);
    setPreviewImage(fileName ? fileName : TEXT);
  };

  return (
    <form className='creation-offer-form' action="">
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className='creation-offer-form__field-label'>Name of your place:</label>
        <input
          {...register('name', { required: true })}
          className="sign-up__input form__input"
          name="name"
          type="text"
          placeholder="Tribe Amsterdam City"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className='creation-offer-form__field-label'>Please tell us about your place:</label>
        <textarea
          {...register('description', { required: true })}
          className="sign-up__input form__input"
          name="description"
          placeholder="Located in Amsterdam, 3.7 km from A'DAM Lookout, Tribe Amsterdam City has accommodations with a fitness center, private parking, a shared lounge and a bar. With free WiFi, this 4-star hotel offers a 24-hour front desk and luggage storage space. Guests can have a drink at the snack bar."
        >
        </textarea>
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label>Select your city:</label>
        <div
          className='creation-offer-form__select'
          onClick={() => changeCitySelectStatus(!citySelectStatus)}
        >
          <span>{selectedCity}</span>
          <svg className={cn('creation-offer-form__select-arrow', {'creation-offer-form__select-arrow--active': !citySelectStatus})} width="9" height="6">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </div>
        <ul className={cn('creation-offer-form__select-list', {'visually-hidden': citySelectStatus}) }>
          {CITIES.map((city) => <li key={city} className='places__option places__option' onClick={() => selectOfferCity(city)}>{city}</li>)}
        </ul>
        <input
          {...register('city', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="city"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label>Select type of your place:</label>
        <div
          className='creation-offer-form__select'
          onClick={() => changeHousingTypeStatus(!housingTypeStatus)}
        >
          <span>{selectedHousingType}</span>
          <svg className={cn('creation-offer-form__select-arrow', {'creation-offer-form__select-arrow--active': !housingTypeStatus})} width="9" height="6">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </div>
        <ul className={cn('creation-offer-form__select-list', {'visually-hidden': housingTypeStatus}) }>
          {HOUSING_TYPES.map((type) => <li key={type} className='places__option places__option' onClick={() => selectHousingType(type)}>{type}</li>)}
        </ul>
        <input
          {...register('housingType', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="housingType"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <ul className='places__options places__options--custom places__options--opened'>
          {FACILITIES.map((item) => <li key={item} className='places__option places__option'>{item}</li>)}
        </ul>
        <input
          {...register('facilities', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="facilities"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <span>Preview: </span>
        <input
          {...register('prevImageUrl')}
          id="preview"
          className="visually-hidden sign-up__input form__input"
          name="prevImageUrl"
          type="file"
          onChange={changePrevieImageName}
          placeholder='sfdsdfdsf'
        />
        <label htmlFor="preview" className="sign-up__input form__input sign-up__input--avatar">
          <span className={cn('creation-offer-form__text-upload', {'creation-offer-form__selected-file-text': previewImageValue !== TEXT})}>
            {previewImageValue}
          </span>
        </label>
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <input
          {...register('photos')}
          id="photos"
          className="visually-hidden sign-up__input form__input"
          name="photos"
          type="file"
          multiple
        />
        <label htmlFor="photos" className="sign-up__input form__input sign-up__input--avatar">
          <span className="sign-up__text-upload">
            Select photos of your place:
          </span>
        </label>
      </div>

      <div className="sign-up__input-wrapper form__input-wrapper">
        <label>Number of guests</label>
        <input
          {...register('roomCount', { required: true })}
          className="sign-up__input form__input"
          name="roomCount"
          type="number"
          placeholder="3"
        />
      </div>

      <div className="sign-up__input-wrapper form__input-wrapper">
        <input
          {...register('coordinates', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="coordinates"
        />
      </div>
    </form>
  );
};

export default CreationOfferForm;
