export const Limits = {
  CardQtyOnPage: 5,
  MaxPlaceRating: 5,
  MaxPhotosOnPage: 6,
  MaxCommentsOnPage: 10,
  MinCommentSymbols: 50,
  MaxCommentSymbols: 300,
  RequestTimeout: 5000,
  ErrorDeleteTimeout: 5000,
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
}

export const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

export enum ProfileTabs {
  AboutMe = 'About me',
  MyPublications = 'My publications',
  Favorites = 'Favorites',
}

export const HOUSING_TYPES: string[] = ['apartment', 'house', 'room', 'hotel'];

export const FACILITIES: string[] = ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat', 'Washer', 'Towels', 'Fridge'];
