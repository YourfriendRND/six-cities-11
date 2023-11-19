import store from '../store/store';
import { User } from './user-type';
import { Offer, Location } from './offers-type';
import { Review } from './reviews-type';

export type UserProcess = {
  authorizationStatus: string;
  user: User | null;
  loginErrorStatus: boolean;
  activeProfileTab: string;
};

export type OfferProcess = {
  currentCity: string;
  sortOfferType: string;
  activePlaceCardId: string;
  activePlaceCoordinates: {
    lat: number;
    lng: number;
  } | null;
  offers: Offer[];
  isOffersLoading: boolean;
  isOfferLoaded: boolean;
  offerLoadingErrorStatus: boolean;
  currentOffer: Offer | null;
  currentOfferError: boolean;
  nearbyOffers: Offer[];
};

export type FavoriteOffersProcess = {
  favorites: Offer[];
  favoriteLoadingErrorStatus: boolean;
  changeFavoriteOfferStatusError: boolean;
}

export type ReviewProcess = {
  reviews: Review[];
  reviewErrorStatus: boolean;
  creationCommentErrorStatus: boolean;
  isCommentSent: boolean;
};

export type PublishedProcess = {
  myOffers: Offer[];
  isCreationFormOpen: boolean;
}

export type CreationFormProcess = {
  name: string;
  description: string;
  city: string;
  housingType: string;
  facilities: string[];
  roomCount: number;
  guestCount: number;
  price: number;
  photos: File[];
  coordinates: Location;
}

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
