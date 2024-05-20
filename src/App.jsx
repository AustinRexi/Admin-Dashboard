import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard";
import Conversations from "./Conversations";

import Customer from "./customer";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "conversations",
          element: <Conversations />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
