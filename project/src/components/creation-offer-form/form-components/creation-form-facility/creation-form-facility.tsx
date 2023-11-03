import cn from 'classnames';
import { setFacilities } from '../../../../store/creation-form-process/creation-form-process';
import { getFacilities } from '../../../../store/creation-form-process/selectors';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { FACILITIES } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormFacility = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const checkedFacilities = useAppSelector(getFacilities);

  const handleFacilityChange = (checkedFacility: string): void => {
    const isCheckedItem = Boolean(checkedFacilities.find((facility) => facility === checkedFacility));
    isCheckedItem
      ? dispatch(setFacilities(checkedFacilities.filter((facility) => facility !== checkedFacility)))
      : dispatch(setFacilities([...checkedFacilities, checkedFacility]));
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label>Check the available facilities for your place:</label>
      <ul className='creation-offer-form__facilities-checkbox-list'>
        {FACILITIES.map((item) => {
          const isCheckedItem = Boolean(checkedFacilities.find((facility) => facility === item));
          return (
            <li key={item} className={cn(
              { 'creation-offer-form__ficility-item': !isCheckedItem },
              { 'creation-offer-form__ficility-item--checked': isCheckedItem }
            )}
            onClick={() => handleFacilityChange(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreationFormFacility;
