import { create } from "zustand";
import { persist } from "zustand/middleware";
import Backendless from "../lib/backendless";
// import { persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  inputEmail: string;
}

type UserData = {
  user: User | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (inputEmail: string, inputPassword: string) => void;
  registerUser: (inputEmail: string, inputPassword: string) => Promise<void>;
};

const useUserData = create<UserData>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      error: null,
      isLoading: false,
      isAuthenticated: false,
      login: (inputEmail, inputPassword) => {
        try {
          set({ isLoading: true, error: null, isAuthenticated: false });
          if (inputEmail !== "novpa@gmail.com" || inputPassword !== "novpar") {
            throw new Error("Invalid credential");
          }

          const fakeUser: User = {
            id: 1,
            name: "novpa",
            inputEmail,
          };

          const fakeToken = "fake-jwt-token";

          // console.log(fakeUser);

          set({
            user: fakeUser,
            token: fakeToken,
            isLoading: false,
            isAuthenticated: true,
          });
        } catch (error: unknown) {
          const message =
            error instanceof Error ? error.message : "unknown error";

          set({ error: message });
        }
      },

      registerUser: async (inputEmail, inputPassword) => {
        try {
          const response = await Backendless.UserService.register({
            email: inputEmail,
            password: inputPassword,
          });

          console.log(response);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    { name: "auth" },
  ),
);

export default useUserData;
