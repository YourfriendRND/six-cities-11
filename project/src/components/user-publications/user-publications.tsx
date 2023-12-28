import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getCreationFormStatus, getMyOffers } from '../../store/published-offers-process/selectors';
import UserPublicationsEmpty from '../user-publications-empty/user-publications-empty';
import CreationOfferForm from '../creation-offer-form/creation-offer-form';
import PlaceCard from '../place-card/place-card';
import './user-publications.css';
import { fetchMyOffers } from '../../store/api-actions';
import { AppPageName } from '../../const';
// import { Offer } from '../../types/offers-type';
// getMyOffers
const UserPublications = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(getCreationFormStatus);
  const myOffers = useAppSelector(getMyOffers);
  // const myOffers: Offer[] = [];

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && !myOffers) {
      dispatch(fetchMyOffers());
    }

    return () => {
      isComponentMounted = false;
    };
  }, [dispatch, myOffers]);

  return (
    <div className="page__published-container container">
      {!isFormOpen ?
        <section className='published'>
          <h1 className='published-title'>My published offers</h1>
          {!myOffers?.length
            ? <UserPublicationsEmpty />
            : (
              <div className='published__content-wrapper'>
                {myOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} pageName={AppPageName.Main} isActive={false} />)}
              </div>
            )}

        </section>
        : <CreationOfferForm />}
    </div>
  );
};

export default UserPublications;
