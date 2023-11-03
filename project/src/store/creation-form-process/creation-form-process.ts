import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpaces, DEFAULT_HOUSING_TYPE } from '../../const';
import { CreationFormProcess } from '../../types/state';

const initialState: CreationFormProcess = {
  name: '',
  description: '',
  city: DEFAULT_CITY,
  housingType: DEFAULT_HOUSING_TYPE,
  facilities: [],
  roomCount: 1,
};

export const creationFormProcess = createSlice({
  name: NameSpaces.Creation,
  initialState,
  reducers: {
    setOfferName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    setHousingType: (state, action: PayloadAction<string>) => {
      state.housingType = action.payload;
    },

    setFacilities: (state, action: PayloadAction<string[]>) => {
      state.facilities = action.payload;
    },

    setRoomCount: (state, action: PayloadAction<number>) => {
      state.roomCount = action.payload;
    }
  }
});

export const { setOfferName, setDescription, setCity, setHousingType, setFacilities, setRoomCount } = creationFormProcess.actions;
