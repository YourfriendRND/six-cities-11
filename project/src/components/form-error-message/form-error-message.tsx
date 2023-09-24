import './form-error-message.css';

type FormErrorMessageProps = {
  message: string;
  formName: string;
}

const FormErrorMessage = ({ message, formName }: FormErrorMessageProps) => (
  <p className={`${formName}-form-error-message form-error-message`}>
    {message}
  </p>
);

export default FormErrorMessage;
