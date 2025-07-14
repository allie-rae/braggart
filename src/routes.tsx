import App from "./App";
import { BragPage, Goals, PageNotFound } from "./Pages/index";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BragPage /> },
      { path: "/goals", element: <Goals /> },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
