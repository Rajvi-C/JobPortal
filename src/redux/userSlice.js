import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userType: null, // 'admin' or 'employee'
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userType = action.payload.type;
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userType = null;
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
