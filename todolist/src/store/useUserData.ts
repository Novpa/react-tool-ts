import { create } from "zustand";
import { persist } from "zustand/middleware";
import Backendless from "../lib/backendless";
import type { BackendlessUser } from "../interfaces/publicInterface";
// import { persist } from "zustand/middleware";

interface User {
  id: number | string;
  inputEmail: string;
}

type UserData = {
  user: User | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (inputEmail: string, inputPassword: string) => Promise<void>;
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
      login: async (inputEmail, inputPassword) => {
        try {
          set({ isLoading: true, error: null, isAuthenticated: false });
          const response: BackendlessUser = await Backendless.UserService.login(
            inputEmail,
            inputPassword,
          );

          set({
            user: {
              id: response?.objectId,
              inputEmail: response?.email,
            },
            token: response["user-token"],
            isLoading: false,
            isAuthenticated: true,
          });
        } catch (error: unknown) {
          const message =
            error instanceof Error ? error.message : "unknown error";

          set({ error: message, isLoading: false, isAuthenticated: false });
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
