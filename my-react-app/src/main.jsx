import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import store from "./Store/Store";
import { Provider } from "react-redux";
import Admin from "./Admin";
import Doctor from "./RegisterDoctor";
import Patient from "./Patient";
import RegisterPage from "./RegisterPage";
import DoctorMain from "./DoctorMain";

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RegisterPage />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Doctor",
        element: <DoctorMain />,
      },
      {
        path: "/Patient",
        element: <Patient />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
