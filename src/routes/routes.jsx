import App from "../App";
import NoMatch from "../pages/404";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Root from "./root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user/:id",
        element: <Profile />,
      },
    ],
  },
];
