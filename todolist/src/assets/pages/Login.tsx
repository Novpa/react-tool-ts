import { useState, useRef } from "react";
import useUserData from "../../store/useUserData";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const getData = useUserData((state) => state.getUserData);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailInput.current && passwordInput.current) {
      getData(emailInput.current?.value, passwordInput.current?.value);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="py-4">
          <input
            className="h-10 w-50 rounded-md border border-indigo-500"
            ref={emailInput}
            type="email"
            required
            placeholder="Input email"
          />
        </div>
        <div className="flex gap-5">
          <input
            className="h-10 w-50 rounded-md border border-indigo-500"
            ref={passwordInput}
            type={showPassword ? "text" : "password"}
            required
            placeholder="Input password"
          />
          <button
            className="cursor-pointer hover:text-indigo-500"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? "Hide password" : "Show passwords"}
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
