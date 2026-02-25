import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="">
        <h1 className="text-5xl font-bold">Welcome to TODO list app!</h1>
        <div className="flex justify-center gap-3 py-5">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-white"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer rounded-md border border-indigo-400 bg-white px-4 py-2"
          >
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
}

export default Landing;
