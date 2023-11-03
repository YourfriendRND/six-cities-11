import { NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getName = (state: State): string => state[NameSpaces.Creation].name;

export const getDescription = (state: State): string => state[NameSpaces.Creation].description;

export const getSelectedCity = (state: State): string => state[NameSpaces.Creation].city;

export const getHousingType = (state: State): string => state[NameSpaces.Creation].housingType;

export const getFacilities = (state: State): string[] => state[NameSpaces.Creation].facilities;

export const getRoomCount = (state: State): number => state[NameSpaces.Creation].roomCount;
