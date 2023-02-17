import App from "./App";
import { Account, BragPage, Goals, PageNotFound } from "./Pages";
import { Demo } from "./Pages/Demo";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BragPage /> },
      { path: "/account", element: <Account /> },
      { path: "/goals", element: <Goals /> },
      { path: "/demo", element: <Demo /> },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
