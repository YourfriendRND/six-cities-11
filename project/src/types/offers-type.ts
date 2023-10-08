export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: Location;
  name: string;
};

type Host = {
  avatarUrl?: string;
  id: string;
  isPro?: boolean;
  name?: string;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  publishDateTime: string;
  commentCount: number;
};

export type ServerOffer = {
  authorId: string;
  city: string;
  commentCount: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  description: string;
  facilities: string[];
  guestCount: number;
  housingType: string;
  id: string;
  isPremium: boolean;
  name: string;
  photos: string[];
  prevImageUrl: string;
  price: number;
  publishDate: string;
  rating: number;
  roomCount: number;
  isFavorite: boolean;
}

export type ServerExactOffer = Exclude<ServerOffer, 'autorId'> & {
  author: Host;
}
