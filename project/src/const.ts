import { Location } from './types/offers-type';

export const Limits = {
  CardQtyOnPage: 5,
  MaxPlaceRating: 5,
  MaxPhotosOnPage: 6,
  MaxCommentsOnPage: 10,
  MinCommentSymbols: 50,
  MaxCommentSymbols: 300,
  RequestTimeout: 5000,
  ErrorDeleteTimeout: 5000,
  MaxOfferRoomCount: 8
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  SignUp = '/signup',
  Profile = '/profile',
  MyOffers = '/published'
}

export enum UserAuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown'
}

export enum UserValidationParams {
  MinPasswordLength = 6,
  MaxPasswordLength = 12,
}

export const PlaceRating: {
  [rating: string]: number;
} = {
  'perfect': 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1
};

export const DEFAULT_CITY = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORT_TYPE = 'Popular';

export const SortType = {
  Popular: DEFAULT_SORT_TYPE,
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first'
};

export enum AppPageName {
  Main = 'Main',
  Favorites = 'Favorites',
  Room = 'Room',
}

export const PlaceCardSize = {
  favoriteCardSize: 150,
  mainCardWidth: 260,
  mainCardHeight: 200
};

//const SERVER_URL = 'https://11.react.pages.academy/six-cities';

export const SERVER_URL = 'http://localhost:4000';

export enum APIRoutes {
  Offers = '/offers',
  SignUp = 'user/register',
  Login = 'user/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite'
}

export enum ServerResponseActions {
  NoContent = 'empty',
  Ready = 'ready',
  Error = 'error',
  Loading = 'loading'
}

export enum NameSpaces {
  User = 'USER',
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
  Review = 'REVIEW',
  Published = 'PUBLISHED',
  Creation = 'CREATION'
}

export const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

export enum ProfileTabs {
  AboutMe = 'About me',
  MyPublications = 'My publications',
  Favorites = 'Favorites',
}

export const HOUSING_TYPES: string[] = ['apartment', 'house', 'room', 'hotel'];

export const [ DEFAULT_HOUSING_TYPE ] = HOUSING_TYPES;

export const FACILITIES: string[] = ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat', 'Washer', 'Towels', 'Fridge'];

export const CitiesCenterLocation: Record<string, Location> = {
  'Paris': {
    longitude: 2.349014,
    latitude: 48.864716,
    zoom: 12,
  },
  'Cologne': {
    longitude: 6.953101,
    latitude: 50.935173,
    zoom: 12,
  },
  'Brussels': {
    longitude: 4.34878,
    latitude: 50.85045,
    zoom: 12,
  },
  'Amsterdam': {
    longitude: 4.897070,
    latitude: 52.377956,
    zoom: 12,
  },
  'Hamburg': {
    longitude: 9.993682,
    latitude: 53.551086,
    zoom: 12,
  },
  'Dusseldorf': {
    longitude: 6.783333,
    latitude: 51.233334,
    zoom: 12,
  }
};
