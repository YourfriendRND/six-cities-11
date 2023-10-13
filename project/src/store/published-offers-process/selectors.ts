import { NameSpaces } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offers-type';

export const getMyOffers = (state: State): Offer[] => state[NameSpaces.Published].myOffers;

export const getCreationFormStatus = (state: State): boolean => state[NameSpaces.Published].isCreationFormOpen;
