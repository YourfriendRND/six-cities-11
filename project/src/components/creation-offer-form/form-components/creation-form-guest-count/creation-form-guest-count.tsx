import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { setGuestCount } from '../../../../store/creation-form-process/creation-form-process';
import { getGuestCount } from '../../../../store/creation-form-process/selectors';
import { Limits } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormGuestCount = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const guestCount = useAppSelector(getGuestCount);

  const handleGuestCountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setGuestCount(Number(evt.target.value)));
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label className='creation-offer-form__field-label'>Please, enter the maximum number of guests (min 1, max 10): </label>
      <input
        className="sign-up__input form__input"
        name="roomCount"
        type="number"
        placeholder="3"
        value={guestCount}
        onChange={handleGuestCountChange}
        max={Limits.MaxOfferGuestCount}
        min={1}
      />
    </div>
  );
};

export default CreationFormGuestCount;
