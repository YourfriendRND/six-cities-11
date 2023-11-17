/* eslint-disable no-console */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, CreationFormProcess } from '../types/state';
import { State } from './../types/state';
import { Offer, ServerExactOffer, ServerOffer } from '../types/offers-type';
import { CreatedUser, User, UserLogin } from '../types/user-type';
import { CommentTemplateType } from '../types/reviews-type';
import { APIRoutes } from '../const';
import { dropToken, saveToken } from '../services/token';
import { Review } from '../types/reviews-type';
import { adaptExactOfferFromServer, adaptOffersFromServer } from './api-adapter';

type RequestSettings = {
  dispatch: AppDispatch;
  extra: {
    api: AxiosInstance;
    fileApi: AxiosInstance;
  };
  state: State;
};

export const fetchOffers = createAsyncThunk<Offer[], string, RequestSettings>(
  'offer/fetchOffers',
  async (cityName, { extra: diff }) => {
    const { data } = await diff.api.get<ServerOffer[]>(`${APIRoutes.Offers}?city=${cityName}`);
    return adaptOffersFromServer(data);
  }
);

export const checkLogin = createAsyncThunk<User, undefined, RequestSettings>(
  'user/checkLogin',
  async (_arg, { extra: diff }) => {
    const { data } = await diff.api.get<User>(APIRoutes.Login);
    return data;
  }
);


export const createUser = createAsyncThunk<User, CreatedUser, RequestSettings>(
  'user/signUp',
  async (createdUser, { extra: diff }) => {
    const { data } = await diff.api.post<User>(APIRoutes.SignUp, createdUser);
    saveToken(data.token);
    return data;
  }
);

export const login = createAsyncThunk<User, UserLogin, RequestSettings>(
  'user/login',
  async (userLoginData, { extra: diff }) => {
    const { data } = await diff.api.post<User>(APIRoutes.Login, userLoginData);
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, RequestSettings>(
  'user/logout',
  async (_arg, { extra: diff }) => {
    await diff.api.delete(APIRoutes.Logout);
    dropToken();
  }
);

export const fetchOffer = createAsyncThunk<Offer, string, RequestSettings>(
  'offer/fetchOffer',
  async (offerId, { extra: diff }) => {
    const { data } = await diff.api.get<ServerExactOffer>(`${APIRoutes.Offers}/${offerId}`);
    return adaptExactOfferFromServer(data);
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], number, RequestSettings>(
  'offer/fetchNearbyOffers',
  async (offerId, { extra: diff }) => {
    const { data } = await diff.api.get<Offer[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], number, RequestSettings>(
  'review/fetchReviews',
  async (offerId, { extra: diff }) => {
    const { data } = await diff.api.get<Review[]>(`${APIRoutes.Reviews}/${offerId}`);
    return data;
  }
);

export const sendComment = createAsyncThunk<Review[], CommentTemplateType, RequestSettings>(
  'review/sendComment',
  async ({ offerId, comment, rating }, { extra: diff }) => {
    const { data } = await diff.api.post<Review[]>(`${APIRoutes.Reviews}/${offerId}`, { comment, rating });
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, RequestSettings>(
  'favorite/fetchFavoriteOffers',
  async (_arg, { extra: diff }) => {
    const { data } = await diff.api.get<ServerOffer[]>(APIRoutes.Favorite);
    return adaptOffersFromServer(data);
  }
);

export const changeFavoriteOfferStatus = createAsyncThunk<Offer[], Offer, RequestSettings>(
  'favorite/changeFavoriteOfferStatus',
  async (offer, { extra: diff }) => {
    const { id, isFavorite } = offer;
    const status = isFavorite ? 0 : 1;
    const { data } = await diff.api.post<ServerOffer[]>(`${APIRoutes.Favorite}/${id}/${status}`, offer);
    return adaptOffersFromServer(data);
  }
);

export const createOffer = createAsyncThunk<Offer, Omit<CreationFormProcess, 'coordinates'>, RequestSettings>(
  'offer/create',
  async (createdOffer, {extra: diff}) => {

    console.log(createdOffer);
    const form = new FormData();

    Object.entries(createdOffer).forEach(([key, value]) => {
      if (key === 'previewImage') {
        form.append(key, createdOffer.previewImage as Blob);
        return;
      }

      if (key === 'photos') {
        form.append(key, createdOffer.photos as unknown as Blob);
        return;
      }

      form.append(key, String(value));

    });

    const { data } = await diff.fileApi.post<ServerOffer>(`${APIRoutes.Offers}`, form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    console.log(data);

    const [offer] = adaptOffersFromServer([data]);

    return offer;
  }
);
