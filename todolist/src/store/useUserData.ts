import { create } from "zustand";

type UserData = {
  email: string;
  password: string;
};

type Actions = {
  getUserData: (
    inputEmail: UserData["email"],
    inputPassword: UserData["password"],
  ) => void;
};

const useUserData = create<UserData & Actions>((set) => ({
  email: "",
  password: "",
  getUserData: (inputEmail, inputPassword) =>
    set((state) => ({ email: inputEmail, password: inputPassword })),
}));

export const getEmail = (state: UserData & Actions) => state?.email ?? "";

export default useUserData;
