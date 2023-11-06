import { NameSpaces } from '../../const';
import { Location } from '../../types/offers-type';
import { State } from '../../types/state';

export const getName = (state: State): string => state[NameSpaces.Creation].name;

export const getDescription = (state: State): string => state[NameSpaces.Creation].description;

export const getSelectedCity = (state: State): string => state[NameSpaces.Creation].city;

export const getHousingType = (state: State): string => state[NameSpaces.Creation].housingType;

export const getFacilities = (state: State): string[] => state[NameSpaces.Creation].facilities;

export const getRoomCount = (state: State): number => state[NameSpaces.Creation].roomCount;

export const getGuestCount = (state: State): number => state[NameSpaces.Creation].guestCount;

export const getPrice = (state: State): number => state[NameSpaces.Creation].price;

export const getPhotoCollection = (state: State): File[] => state[NameSpaces.Creation].photos;

export const getCoordinates = (state: State): Location => state[NameSpaces.Creation].coordinates;

export const getCoordinatesAsText = (state: State): string => {
  const currentOfferCoordinates = state[NameSpaces.Creation].coordinates;
  return `${currentOfferCoordinates.latitude}; ${currentOfferCoordinates.longitude}`;
};
