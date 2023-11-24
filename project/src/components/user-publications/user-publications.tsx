import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/store';
import { getCreationFormStatus } from '../../store/published-offers-process/selectors';
import UserPublicationsEmpty from '../user-publications-empty/user-publications-empty';
import CreationOfferForm from '../creation-offer-form/creation-offer-form';
import './user-publications.css';

const UserPublications = (): JSX.Element => {
  //const dispatch = useAppDispatch();
  const isFormOpen = useAppSelector(getCreationFormStatus);

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted) {
      //dispatch();
      // eslint-disable-next-line no-console
      console.error('Not implemented yet');
    }

    return () => {
      isComponentMounted = false;
    };
  }, []);

  return (
    <div className="page__published-container container">
      {!isFormOpen ?
        <section className='published published--empty'>
          <h1 className='published-title'>My published offers</h1>
          <UserPublicationsEmpty />
        </section>
        : <CreationOfferForm />}
    </div>
  );
};

export default UserPublications;
