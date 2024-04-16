import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard";
import Settings from "./Components/Settings";
import Customer from "./customer";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
