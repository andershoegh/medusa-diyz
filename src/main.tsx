import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Root } from "./routes/Root";
import { NotFoundPage } from "./components/NotFoundPage";
import About from "./routes/About";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "react-query";
import Products from "./routes/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        // Content
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <RouterProvider router={router} />
    </MedusaProvider>
  </React.StrictMode>
);
