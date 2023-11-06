import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getRoomCount } from '../../../../store/creation-form-process/selectors';
import { setRoomCount } from '../../../../store/creation-form-process/creation-form-process';
import { Limits } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormRoomCount = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const roomCountValue = useAppSelector(getRoomCount);

  const handleRoomCountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setRoomCount(Number(evt.target.value)));
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label className='creation-offer-form__field-label'>Please, enter the number of rooms for your place (min 1, max 8): </label>
      <input
        className="creation-offer-form__input form__input"
        name="roomCount"
        type="number"
        placeholder="1"
        value={roomCountValue}
        onChange={handleRoomCountChange}
        max={Limits.MaxOfferRoomCount}
        min={1}
      />
    </div>
  );
};

export default CreationFormRoomCount;
