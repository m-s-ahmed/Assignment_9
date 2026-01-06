import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../providers/PrivateRoute";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/all-games",
        element: <AllGames />,
      },
      {
        path: "/game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/games.json");
          return res.json();
        },
      },

      {
        
      }
    ],
  },
]);

export default router;
