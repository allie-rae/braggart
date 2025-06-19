import App from "./App.tsx";
import { BragPage, Goals, PageNotFound } from "./Pages/index.ts";
import { Demo } from "./Pages/Demo.tsx";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BragPage /> },
      { path: "/goals", element: <Goals /> },
      { path: "/demo", element: <Demo /> },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
