import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getDescription } from '../../../../store/creation-form-process/selectors';
import { setDescription } from '../../../../store/creation-form-process/creation-form-process';
import '../../creation-offer-form.css';

const CreationFormDescription = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const description = useAppSelector(getDescription);

  const handledescriptionChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(setDescription(evt.target.value));
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label className='creation-offer-form__field-label'>Please tell us about your place:</label>
      <textarea
        className="creation-offer-form__input form__input"
        name="description"
        placeholder="Located in Amsterdam, 3.7 km from A'DAM Lookout, Tribe Amsterdam City has accommodations with a fitness center, private parking, a shared lounge and a bar. With free WiFi, this 4-star hotel offers a 24-hour front desk and luggage storage space. Guests can have a drink at the snack bar."
        value={description}
        onChange={handledescriptionChange}
        required
      >
      </textarea>
    </div>
  );
};

export default CreationFormDescription;
