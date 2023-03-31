import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  email: undefined,
  uid: undefined,
  first_name: undefined,
  last_name: undefined,
  username: undefined,
  isAdmin: undefined,
};

export const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducer: {
    login: (state, { payload }) => {
      state.loggedIn = true;
      state.uid = payload?.uid;
      state.email = payload?.email;
    },
    logout: (state) => {
      state = initialState;
    },
    updateUserDetails: (state, { payload }) => {
      state.first_name = payload?.first_name;
      state.last_name = payload?.last_name;
      state.username = payload?.username;
      state.isAdmin = payload?.isAdmin;
    },
  },
});
