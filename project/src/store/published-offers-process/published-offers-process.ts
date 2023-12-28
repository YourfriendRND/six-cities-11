import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { PublishedProcess } from '../../types/state';
import { fetchMyOffers } from '../api-actions';

const initialState: PublishedProcess = {
  myOffers: null,
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
  extraReducers(builder) {
    builder
      .addCase(fetchMyOffers.fulfilled, (state, action) => {
        state.myOffers = action.payload;
      });
  }
});

export const { setCreationFormStatus } = publishedOffersProcess.actions;
