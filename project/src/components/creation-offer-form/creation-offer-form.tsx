import { useForm } from 'react-hook-form';

const CreationOfferForm = (): JSX.Element => {
  const { register } = useForm();

  return (
    <form action="">
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label>Name</label>
        <input
          {...register('name', { required: true })}
          className="sign-up__input form__input"
          name="name"
          type="text"
          placeholder="Tribe Amsterdam City"
        />
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label>Description</label>
        <textarea
          {...register('name', { required: true })}
          className="sign-up__input form__input"
          name="description"

          placeholder="Located in Amsterdam, 3.7 km from A'DAM Lookout, Tribe Amsterdam City has accommodations with a fitness center, private parking, a shared lounge and a bar. With free WiFi, this 4-star hotel offers a 24-hour front desk and luggage storage space. Guests can have a drink at the snack bar."
        >
          Description of your offer
        </textarea>
      </div>
    </form>
  );
};

export default CreationOfferForm;
