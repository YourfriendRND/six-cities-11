import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpaces, DEFAULT_HOUSING_TYPE, Limits, CitiesCenterLocation } from '../../const';
import { CreationFormProcess } from '../../types/state';
import { Location } from '../../types/offers-type';
import { createOffer } from '../api-actions';

const initialState: CreationFormProcess = {
  createdOfferId: '',
  name: '',
  description: '',
  city: DEFAULT_CITY,
  housingType: DEFAULT_HOUSING_TYPE,
  facilities: [],
  roomCount: 1,
  guestCount: 1,
  price: Limits.MinOfferPrice,
  photos: [],
  coordinates: {
    latitude: CitiesCenterLocation[DEFAULT_CITY].latitude,
    longitude: CitiesCenterLocation[DEFAULT_CITY].longitude,
    zoom: 12,
  },
};

export const creationFormProcess = createSlice({
  name: NameSpaces.Creation,
  initialState,
  reducers: {
    setOfferName: (state, action: PayloadAction<string>): void => {
      state.name = action.payload;
    },

    setDescription: (state, action: PayloadAction<string>): void => {
      state.description = action.payload;
    },

    setCity: (state, action: PayloadAction<string>): void => {
      state.city = action.payload;
    },

    setHousingType: (state, action: PayloadAction<string>): void => {
      state.housingType = action.payload;
    },

    setFacilities: (state, action: PayloadAction<string[]>): void => {
      state.facilities = action.payload;
    },

    setRoomCount: (state, action: PayloadAction<number>): void => {
      state.roomCount = action.payload;
    },

    setGuestCount: (state, action: PayloadAction<number>): void => {
      state.guestCount = action.payload;
    },

    setPrice: (state, action: PayloadAction<number>): void => {
      state.price = action.payload;
    },

    setPhotos: (state, action: PayloadAction<File[]>): void => {
      state.photos = action.payload;
    },

    setOfferCoordinates: (state, action: PayloadAction<Location>): void => {
      state.coordinates = action.payload;
    },

    resetState: (state): void => {
      state = {...initialState};
    },

  },
  extraReducers(builder) {
    builder
      .addCase(createOffer.fulfilled, (state, action) => {
        state.createdOfferId = action.payload.id;
      });
  }
});

export const {
  setOfferName,
  setDescription,
  setCity,
  setHousingType,
  setFacilities,
  setRoomCount,
  setGuestCount,
  setPrice,
  setPhotos,
  setOfferCoordinates
} = creationFormProcess.actions;
