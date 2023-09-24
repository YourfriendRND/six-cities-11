import { useForm, FieldValues } from 'react-hook-form';
import FormErrorMessage from '../form-error-message/form-error-message';
import { UserValidationParams } from '../../const';
import { useAppDispatch } from '../../hooks/store';
import { createUser } from '../../store/api-actions';
import './sign-up-form.css';


const SignUpForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useAppDispatch();

  const confirmPasswordValidate = (passwordConfirmation: string): boolean => {
    if (watch('password') !== passwordConfirmation) {
      return false;
    }
    return true;
  };

  const onSubmit = handleSubmit((data: FieldValues): void => {
    dispatch(createUser({
      name: String(data.name),
      email: String(data.email),
      password: String(data.password),
      isPro: false
    }));
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="sign-up__form form" action="#" method="post" onSubmit={onSubmit}>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Name</label>
        <input
          {...register('name', { required: true })}
          className="sign-up__input form__input"
          name="name"
          type="text"
          placeholder="Your name"
        />
        {errors.name?.type === 'required' && <FormErrorMessage message='User name is required' formName='signup'/>}
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Email</label>
        <input
          {...register('email', { required: true })}
          className="sign-up__input form__input"
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email?.type === 'required' && <FormErrorMessage message='E-mail is required' formName='signup'/>}
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="sign-up__input form__input"
          {...register('password', {
            required: true,
            pattern: /(?=.*\d)(?=.*[a-z])/i,
            minLength: UserValidationParams.MinPasswordLength,
            maxLength: UserValidationParams.MaxPasswordLength,
          })}
          type="password"
          name="password"
          placeholder="Password"
        />
        {errors.password?.type === 'required' && <FormErrorMessage message='Password is required' formName='signup'/>}
        {errors.password?.type === 'pattern' && <FormErrorMessage message='The password invalid. The password should have 1 letter and 1 number' formName='signup'/>}
        {errors.password?.type === 'minLength' && <FormErrorMessage message={`The minimum length of password is ${UserValidationParams.MinPasswordLength}`} formName='signup'/>}
        {errors.password?.type === 'maxLength' && <FormErrorMessage message={`The maximum length of password is ${UserValidationParams.MaxPasswordLength}`} formName='signup'/>}
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password again</label>
        <input
          className="sign-up__input form__input"
          {...register('password-again', { required: true, validate: confirmPasswordValidate}) }
          type="password"
          name="password-again"
          placeholder="Password again"
        />
        {errors['password-again']?.type === 'required' && <FormErrorMessage message='Please, repeate your password' formName='signup'/>}
        {errors['password-again']?.type === 'validate' && <FormErrorMessage message='Passwords are not equal' formName='signup'/>}
      </div>
      <div className="sign-up__input-wrapper form__input-wrapper">
        <input
          {...register('avatar')}
          id="avatar"
          className="visually-hidden sign-up__input form__input"
          name="avatar"
          type="file"
        />
        <label htmlFor="avatar" className="sign-up__input form__input sign-up__input--avatar">
          <span className="sign-up__text-upload">
            Upload avatar image...
          </span>
        </label>
      </div>
      <button
        className="sign-up__submit form__submit button"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
