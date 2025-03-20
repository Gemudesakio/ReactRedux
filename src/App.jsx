import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
import StandardLayout from "./layouts/StandardLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/",
        element: <Store />,
      },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
