import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getName } from '../../../../store/creation-form-process/selectors';
import { setOfferName } from '../../../../store/creation-form-process/creation-form-process';
import '../../creation-offer-form.css';

const CreationFormName = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(getName);

  const handleNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setOfferName(evt.target.value));
  };

  return (
    <div className="creation-offer-form__input-wrapper form__input-wrapper">
      <label className='creation-offer-form__field-label'>Name of your place:</label>
      <input
        className="creation-offer-form__input form__input"
        name="name"
        type="text"
        placeholder="Tribe Amsterdam City"
        onChange={handleNameChange}
        value={name}
        required
      />
    </div>);
};

export default CreationFormName;
