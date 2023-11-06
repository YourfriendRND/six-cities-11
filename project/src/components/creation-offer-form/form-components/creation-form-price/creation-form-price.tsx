import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/store';
import { getPrice } from '../../../../store/creation-form-process/selectors';
import { setPrice } from '../../../../store/creation-form-process/creation-form-process';
import { Limits } from '../../../../const';
import '../../creation-offer-form.css';

const CreationFormPrice = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(getPrice);

  const handlePriceChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setPrice(Number(evt.target.value)));
  };

  return (
    <div className="sign-up__input-wrapper form__input-wrapper">
      <label className='creation-offer-form__field-label'>Please, enter the price of your offer (min 100, max 100 000): </label>
      <input
        className="sign-up__input form__input"
        name="roomCount"
        type="number"
        placeholder="5000"
        onChange={handlePriceChange}
        value={price}
        max={Limits.MaxOfferPrice}
        min={Limits.MinOfferPrice}
      />
    </div>
  );

};

export default CreationFormPrice;
