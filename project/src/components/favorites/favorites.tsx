import { Offer } from '../../types/offers-type';
import FavoriteLocationList from '../favorite-location-list/favorite-location-list';
import FavoriteEmptyMessage from '../favorites-empty-message/favorites-empty-message';

type FavoritesProps = {
  offers: Offer[];
};

const Favorites = ({ offers }: FavoritesProps): JSX.Element => {
  const isEmptyFavorite = !offers.length;
  return (
    <div className="page__favorites-container container">
      <section className={`favorites ${!isEmptyFavorite ? 'favorites--empty' : ''}`}>
        <h1 className={`${isEmptyFavorite ? 'favorites__title' : 'visually-hidden'}`}>Saved listing</h1>
        {!isEmptyFavorite ? <FavoriteLocationList offers={offers} /> : <FavoriteEmptyMessage />}
      </section>
    </div>
  );
};

export default Favorites;
