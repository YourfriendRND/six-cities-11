import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { PublishedProcess } from '../../types/state';

const initialState: PublishedProcess = {
  myOffers: [],
  isCreationFormOpen: false,
};

export const publishedOffersProcess = createSlice({
  name: NameSpaces.Published,
  initialState,
  reducers: {
    setCreationFormStatus: (state, action: PayloadAction<boolean>) => {
      state.isCreationFormOpen = action.payload;
    },
  },
});

export const { setCreationFormStatus } = publishedOffersProcess.actions;
