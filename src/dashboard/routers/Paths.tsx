/* eslint-disable */
import Signin from "../pages/Signin";
import HomePage from "../pages/HomePage";
export const publicPath = [
  {
    component: Signin,
    exact: true,
    path: "/signin",
  },
  {
    component: Signin,
    exact: true,
    path: "/",
  },
];

export const privatePath = [
  {
    component: HomePage,
    exact: true,
    path: "/dashboard",
  },
];
