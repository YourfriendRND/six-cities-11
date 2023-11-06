import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getSelectedCity } from '../../../../store/creation-form-process/selectors';
import { setCity, setOfferCoordinates } from '../../../../store/creation-form-process/creation-form-process';
import { CITIES, CitiesCenterLocation } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormCity = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getSelectedCity);
  const [citySelectStatus, changeCitySelectStatus] = useState(true);

  const handleSelectCity = (city: string): void => {
    dispatch(setCity(city));
    dispatch(setOfferCoordinates(CitiesCenterLocation[city]));
    changeCitySelectStatus(!citySelectStatus);
  };

  return (
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
        {CITIES.map((city) => <li key={city} className='places__option places__option' onClick={() => handleSelectCity(city)}>{city}</li>)}
      </ul>
    </div>
  );
};

export default CreationFormCity;
