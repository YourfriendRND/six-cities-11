import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { UserProcess } from '../../types/state';
import { UserAuthStatus } from '../../const';
import { createUser, checkLogin, login } from '../api-actions';
import { dropToken } from '../../services/token';

const initialState: UserProcess = {
  authorizationStatus: UserAuthStatus.Unknown,
  user: null,
  loginErrorStatus: false,
};

export const userProcess = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<boolean>) => {
      state.loginErrorStatus = action.payload;
    },
    logoutUser: (state) => {
      dropToken();
      state.user = null;
      state.authorizationStatus = UserAuthStatus.NoAuth;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.authorizationStatus = UserAuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = UserAuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = UserAuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
        state.loginErrorStatus = true;
      });
    // .addCase(logout.fulfilled, (state) => {
    //   state.authorizationStatus = UserAuthStatus.NoAuth;
    //   state.user = null;
    // });
  }
});

export const { setLoginError, logoutUser } = userProcess.actions;
