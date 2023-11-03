import cn from 'classnames';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getHousingType } from '../../../../store/creation-form-process/selectors';
import { setHousingType } from '../../../../store/creation-form-process/creation-form-process';
import { HOUSING_TYPES } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormPlaceType = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeHousingType = useAppSelector(getHousingType);
  const [housingTypeStatus, changeHousingTypeStatus] = useState(true);

  const handleSelectHousingType = (type: string): void => {
    dispatch(setHousingType(type));
    changeHousingTypeStatus(!housingTypeStatus);
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label>Select type of your place:</label>
      <div
        className='creation-offer-form__select'
        onClick={() => changeHousingTypeStatus(!housingTypeStatus)}
      >
        <span>{activeHousingType}</span>
        <svg className={cn('creation-offer-form__select-arrow', { 'creation-offer-form__select-arrow--active': !housingTypeStatus })} width="9" height="6">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </div>
      <ul className={cn('creation-offer-form__select-list', { 'visually-hidden': housingTypeStatus })}>
        {HOUSING_TYPES.map((type) => <li key={type} className='places__option places__option' onClick={() => handleSelectHousingType(type)}>{type}</li>)}
      </ul>
    </div>);

};

export default CreationFormPlaceType;
