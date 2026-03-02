import { useEffect, useState } from "react";
import useUserData from "../store/useUserData";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const login = useUserData((state) => state.login);
  const isAuthenticated = useUserData((state) => state.isAuthenticated);
  const errorMessage = useUserData((state) => state.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/todos");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputEmail, inputPassword);
    if (isAuthenticated) {
      navigate("todos");
    }
  };

  return (
    <main className="flex h-dvh items-center justify-center">
      <div>
        <h1 className="text-2xl font-semibold">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            {errorMessage && <p>{errorMessage}</p>}
            <input
              className="h-10 w-50 rounded-md border border-indigo-500 px-3"
              onChange={(e) => setInputEmail(e.target.value)}
              value={inputEmail}
              type="email"
              required
              placeholder="Input email"
            />
          </div>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-5">
            <input
              className="h-10 w-50 rounded-md border border-indigo-500 px-3"
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Input password"
            />
            <button
              type="button"
              className="mt-2 cursor-pointer hover:text-indigo-500"
              onClick={() => setShowPassword((show) => !show)}
            >
              {showPassword ? "Hide password" : "Show passwords"}
            </button>
          </div>
          <button
            className="mt-4 cursor-pointer rounded-md border bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-indigo-600"
            type="submit"
          >
            Login
          </button>
        </form>
        {/* <button
          className="mt-4 cursor-pointer rounded-md border bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-indigo-600"
          onClick={loadData}
        >
          Load Data
        </button> */}
      </div>
    </main>
  );
}

export default Login;
