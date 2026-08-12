import App from "./App";
import { BragPage, Dictionary, Goals, PageNotFound, Error } from "./Pages/index";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BragPage />, errorElement: <Error /> },
      { path: "/goals", element: <Goals />, errorElement: <Error /> },
      { path: "/404", element: <PageNotFound /> },
      { path: "/dictionary", element: <Dictionary />, errorElement: <Error /> },
    ],
  },
];
