import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import PrivateRoute from "./pages/PrivateRoute";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Landing },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
      {
        path: "todos",
        element: (
          <PrivateRoute>
            <Todos />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
