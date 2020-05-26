import home from "../views/home";
import sample from "../views/sample";
export default [
  {
    path: "/sample",
    exact: true,
    name: "sample",
    component: sample,
  },
  {
    path: "/",
    exact: true,
    name: "homepage",
    component: home,
  },
];
