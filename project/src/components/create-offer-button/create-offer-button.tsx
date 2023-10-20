import { useAppDispatch } from '../../hooks/store';
import { setCreationFormStatus } from '../../store/published-offers-process/published-offers-process';

import './create-offer-button.css';

type CreateOfferButtonProps = {
  isEmptyPage: boolean;
}

const CreateOfferButton = ({ isEmptyPage }: CreateOfferButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const offerCreationButtonHandle = (): void => {
    dispatch(setCreationFormStatus(true));
  };

  return (
    <button
      className={`profile__add-offer-button ${isEmptyPage ? 'profile__add-offer-button--empty' : ''} button`}
      onClick={offerCreationButtonHandle}
    >
    + Add new offer
    </button>
  );
};

export default CreateOfferButton;