/* eslint-disable no-console */
import cn from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CITIES, FACILITIES, HOUSING_TYPES, DEFAULT_CITY, Limits } from '../../const';
import './creation-offer-form.css';


const CreationOfferForm = (): JSX.Element => {
  const TEXT = 'Upload preview image of your place';
  const { register } = useForm();
  const [citySelectStatus, changeCitySelectStatus] = useState(true);
  const [selectedCity, changeSelectedCity] = useState(DEFAULT_CITY);
  const [previewImageValue, setPreviewImage] = useState('');
  const [, setPreviewFile] = useState<File | null>(null);
  const [housingTypeStatus, changeHousingTypeStatus] = useState(true);
  const [selectedHousingType, changeSelectedHousing] = useState(HOUSING_TYPES[0]);
  const [checkedFacilities, setCheckedFacilities] = useState<string[]>([]);

  const [photoCollection, setPhotoCollection] = useState<File[]>([]);

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
    const fileName = evt.target.value;
    if (evt.target.files) {
      const file = evt.target.files[0];
      setPreviewFile(file);
      setPreviewImage(URL.createObjectURL(file));
      return;
    }
    // .split('\\').at(-1);
    // eslint-disable-next-line no-console
    console.log(fileName);
    setPreviewImage(fileName ? fileName : TEXT);
  };

  const changePhotoCollection = (evt: ChangeEvent<HTMLInputElement>): void => {

    console.log(evt);
    console.log(evt.target.files);
    if (evt.target.files) {
      setPhotoCollection([...evt.target.files]);
    }
  };

  const changeFacilityStatus = (facility: string): void => {
    const isCheckedFacility = checkedFacilities.find((item) => item === facility);
    isCheckedFacility
      ? setCheckedFacilities(checkedFacilities.filter((item) => item !== facility))
      : setCheckedFacilities([...checkedFacilities, facility]);
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
          <svg className={cn('creation-offer-form__select-arrow', { 'creation-offer-form__select-arrow--active': !citySelectStatus })} width="9" height="6">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </div>
        <ul className={cn('creation-offer-form__select-list', { 'visually-hidden': citySelectStatus })}>
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
          <svg className={cn('creation-offer-form__select-arrow', { 'creation-offer-form__select-arrow--active': !housingTypeStatus })} width="9" height="6">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </div>
        <ul className={cn('creation-offer-form__select-list', { 'visually-hidden': housingTypeStatus })}>
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
        <label>Check the available facilities for your place:</label>
        <ul className='creation-offer-form__facilities-checkbox-list'>
          {FACILITIES.map((item) => {
            const isCheckedItem = Boolean(checkedFacilities.find((facility) => facility === item));
            return (
              <li key={item} className={cn(
                { 'creation-offer-form__ficility-item': !isCheckedItem },
                { 'creation-offer-form__ficility-item--checked': isCheckedItem }
              )}
              onClick={() => changeFacilityStatus(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <input
          {...register('facilities', { required: true })}
          className="sign-up__input form__input visually-hidden"
          type="text"
          name="facilities"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className='creation-offer-form__field-label'>Please, enter the number of rooms for your place (min 1, max 8): </label>
        <input
          {...register('roomCount', { required: true })}
          className="sign-up__input form__input"
          name="roomCount"
          type="number"
          placeholder="1"
          max={8}
          min={1}
        />
      </div>
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
      <div className="sign-up__input-wrapper form__input-wrapper">
        <span className='creation-offer-form__field-label'>Select preview image: </span>
        <input
          {...register('prevImageUrl')}
          id="preview"
          className="visually-hidden sign-up__input form__input"
          name="prevImageUrl"
          type="file"
          onChange={changePrevieImageName}
          placeholder='sfdsdfdsf'
        />
        <label htmlFor="preview" className="creation-offer-form__upload-preview">
          <div className="creation-offer-form__upload-preview-wrapper creation-offer-form__upload-preview-wrapper--induced">
            {previewImageValue ? <img src={previewImageValue} alt="preview" width="220" height="160" /> : null}
          </div>
        </label>
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper creation-offer-form__upload-photos-wrapper">
        <input
          {...register('photos')}
          id="photos"
          className="visually-hidden sign-up__input form__input"
          name="photos"
          type="file"
          onChange={changePhotoCollection}
          multiple
        />
        {Array.from({length: Limits.MaxPhotosOnPage}, (_, idx) => (
          <label key={idx} htmlFor="photos" className="creation-offer-form__upload-preview">
            <div className="creation-offer-form__upload-preview-wrapper creation-offer-form__upload-preview-wrapper--induced">
              {photoCollection[idx] ? <img src={URL.createObjectURL(photoCollection[idx])} alt="preview" width="220" height="160" /> : null}
            </div>
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
    </form>
  );
};

export default CreationOfferForm;


/*
<span className={cn('creation-offer-form__text-upload', {'creation-offer-form__selected-file-text': previewImageValue !== TEXT})}>
            {previewImageValue}
          </span>
*/
