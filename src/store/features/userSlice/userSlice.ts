import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, User, UserState } from "../../../types";

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
    logoutUser: (): UserState => ({ ...initialUserState }),
    addItemToShoppingCart: (
      currentUserState: UserState,
      action: PayloadAction<Product>
    ): UserState => ({
      ...currentUserState,
      shoppingCart: [...currentUserState.shoppingCart, action.payload],
    }),
    removeItemFromShoppingCart: (
      currentUserState: UserState,
      action: PayloadAction<Product["id"]>
    ): UserState => ({
      ...currentUserState,
      shoppingCart: currentUserState.shoppingCart.filter(
        (item) => item.id !== action.payload
      ),
    }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
  addItemToShoppingCart: addItemToShoppingCartActionCreator,
  removeItemFromShoppingCart: removeItemToShoppingCartActionCreator,
} = userSlice.actions;
