import {
  configureStore,
} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';

const api = createAPI();
const fileApi = createAPI(true);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        fileApi
      },
    },
    serializableCheck: false
  })
});

export default store;

