import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "./components/UserPage";
import { SWRConfig } from "swr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "users/:userId",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ revalidateOnFocus: true }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
);
