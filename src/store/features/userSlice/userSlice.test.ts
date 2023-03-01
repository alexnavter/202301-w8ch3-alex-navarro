import { Product, User, UserState } from "../../../types";
import {
  addItemToShoppingCartActionCreator,
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer function", () => {
  describe("When it's invoked and receives a currentUserState and a loginUser action to log in the user", () => {
    test("Then it should return the new state with the user logged in", () => {
      const currentUserState: UserState = {
        username: "",
        adress: "",
        shoppingCart: [],
        isLogged: false,
      };

      const newUser: User = {
        username: "Ana",
        adress: "Andorra",
        shoppingCart: [],
      };

      const expectedNewUserState: UserState = {
        username: "Ana",
        adress: "Andorra",
        shoppingCart: [],
        isLogged: true,
      };

      const newUserState: UserState = userReducer(
        currentUserState,
        loginUserActionCreator(newUser)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it's invoked and receives a currentUserState and a logout action to log out the user", () => {
    test("Then it should return the new state with the user logged out", () => {
      const currentUserState: UserState = {
        username: "Ana",
        adress: "Andorra",
        shoppingCart: [],
        isLogged: true,
      };

      const expectedNewUserState: UserState = {
        username: "",
        adress: "",
        shoppingCart: [],
        isLogged: false,
      };

      const newUserState: UserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it's invoked and receives a currentUserState and a addItemToShoppingCart action to add an item", () => {
    test("Then it should return the new state with the new item in the user shopping cart", () => {
      const currentUserState: UserState = {
        username: "Ana",
        adress: "Andorra",
        shoppingCart: [],
        isLogged: true,
      };

      const newItem: Product = {
        name: "patateta",
        image: "hola",
        price: 2,
        category: "tuberculo",
        isAvailable: true,
      };

      const newUserState: User = userReducer(
        currentUserState,
        addItemToShoppingCartActionCreator(newItem)
      );

      const expectedNewUserState: UserState = {
        username: "Ana",
        adress: "Andorra",
        shoppingCart: [
          {
            name: "patateta",
            image: "hola",
            price: 2,
            category: "tuberculo",
            isAvailable: true,
          },
        ],
        isLogged: true,
      };

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
