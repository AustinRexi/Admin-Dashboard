import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
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
          path: "dashboard",
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
  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
}

export default App;
