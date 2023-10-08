import { Offer, ServerExactOffer, ServerOffer } from '../types/offers-type';

export const adaptOffersFromServer = (offers: ServerOffer[]): Offer[] => offers.map((offer) => {
  const location = {
    latitude: Number(offer.coordinates.latitude),
    longitude: Number(offer.coordinates.longitude),
    zoom: 10
  };

  return {
    id: offer.id,
    title: offer.name,
    description: offer.description,
    price: offer.price,
    type: offer.housingType,
    previewImage: offer.prevImageUrl,
    bedrooms: offer.roomCount,
    rating: offer.rating,
    maxAdults: offer.guestCount,
    images: offer.photos,
    isPremium: offer.isPremium,
    goods: offer.facilities,
    isFavorite: offer.isFavorite,
    location: location,
    city: {
      name: offer.city,
      location: location
    },
    host: {
      id: offer.authorId
    },
    publishDateTime: offer.publishDate,
    commentCount: offer.commentCount,
  };
});

export const adaptExactOfferFromServer = (offer: ServerExactOffer): Offer => {
  const location = {
    latitude: Number(offer.coordinates.latitude),
    longitude: Number(offer.coordinates.longitude),
    zoom: 10
  };

  return {
    id: offer.id,
    title: offer.name,
    description: offer.description,
    price: offer.price,
    type: offer.housingType,
    previewImage: offer.prevImageUrl,
    bedrooms: offer.roomCount,
    rating: offer.rating,
    maxAdults: offer.guestCount,
    images: offer.photos,
    isPremium: offer.isPremium,
    goods: offer.facilities,
    isFavorite: offer.isFavorite,
    location: location,
    city: {
      name: offer.city,
      location: location
    },
    host: {
      id: offer.author.id,
      name: offer.author.name,
      avatarUrl: offer.author.avatarUrl,
      isPro: offer.author.isPro,
    },
    publishDateTime: offer.publishDate,
    commentCount: offer.commentCount,
  };
};


