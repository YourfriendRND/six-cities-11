import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offers-type';
import { useAppSelector } from '../../hooks/store';
import { getActivePlaceCardId } from '../../store/offers-process/selectors';

type OfferListProp = {
  offers: Offer[];
  pageName: string;
};

const OfferList = ({ offers, pageName }: OfferListProp): JSX.Element => {
  const activeCardId = useAppSelector(getActivePlaceCardId);

  // eslint-disable-next-line no-console
  console.log(offers);
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          pageName={pageName}
          isActive={activeCardId === offer.id}
        />
      ))}
    </>
  );
};

export default OfferList;
