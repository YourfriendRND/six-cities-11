import { useState, useEffect } from 'react';
import { useAppSelector } from './store';
import { getOfferLoadedStatus, getOfferLoadingErrorStatus } from '../store/offers-process/selectors';
import { ServerResponseActions } from '../const';
import { Offer } from '../types/offers-type';

const useServerActions = (offers: Offer[]) => {
  const [action, setAction] = useState(ServerResponseActions.NoContent);
  const isLoaded = useAppSelector(getOfferLoadedStatus);
  const isError = useAppSelector(getOfferLoadingErrorStatus);

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && !offers.length && isLoaded) {
      // eslint-disable-next-line no-console
      console.log(offers.length);
      // eslint-disable-next-line no-console
      console.log(isLoaded);
      // eslint-disable-next-line no-console
      console.log('set empty');
      setAction(ServerResponseActions.NoContent);
    }

    if (isComponentMounted && !offers.length && !isLoaded && !isError){
      // eslint-disable-next-line no-console
      console.log('set loading');
      setAction(ServerResponseActions.Loading);
    }

    if (isComponentMounted && offers.length > 0 && isLoaded) {
      // eslint-disable-next-line no-console
      console.log('set ready');
      setAction(ServerResponseActions.Ready);
    }

    if (isComponentMounted && isError && !isLoaded) {
      // eslint-disable-next-line no-console
      console.log('set error');
      setAction(ServerResponseActions.Error);
    }

    return () => {
      isComponentMounted = false;
    };

  }, [isError, isLoaded, offers]);

  return action;

};

export default useServerActions;
