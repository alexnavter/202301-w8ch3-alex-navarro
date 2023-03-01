import { User, UserState } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

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
});
