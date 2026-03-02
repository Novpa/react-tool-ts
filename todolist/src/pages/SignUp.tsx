import { useState } from "react";
import Backendless from "../lib/backendless";
import { useNavigate } from "react-router-dom";
import useUserData from "../store/useUserData";

function SignUp() {
  const register = useUserData((state) => state.registerUser);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [reInputPassword, setReInputPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(inputEmail, inputPassword);
    setInputEmail("");
    setInputPassword("");
    setReInputPassword("");
    navigate("/login");
  };

  return (
    <main className="flex h-dvh items-center justify-center">
      <div>
        <h1 className="text-2xl font-semibold">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <input
              className="h-10 w-50 rounded-md border border-indigo-500 px-3"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              type="email"
              required
              placeholder="Input email"
            />
          </div>
          <div>
            <input
              className="h-10 w-50 rounded-md border border-indigo-500 px-3"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Input password"
            />
            <div className="flex flex-col items-start gap-2 pt-3 sm:flex-row sm:gap-5">
              <input
                className="h-10 w-50 rounded-md border border-indigo-500 px-3"
                onChange={(e) => setReInputPassword(e.target.value)}
                value={reInputPassword}
                type={showPassword ? "text" : "password"}
                required
                placeholder="Input password again"
              />
              <button
                type="button"
                className="mt-2 cursor-pointer hover:text-indigo-500"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? "Hide password" : "Show passwords"}
              </button>
            </div>
            <p>
              {inputPassword !== reInputPassword
                ? "Password does not match"
                : ""}
            </p>
          </div>
          <button
            disabled={inputPassword !== reInputPassword}
            className="mt-4 cursor-pointer rounded-md border bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-indigo-600 disabled:bg-stone-500"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
