import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  username: "",
  adress: "",
  shoppingCart: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState: User,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;