import React from "react";
import { BiHome } from "react-icons/bi";
import { GoInfo } from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BiHome />,
    clsName: "navbar-text",
  },
  {
    title: "More Info",
    path: "/moreinfo",
    icon: <GoInfo />,
    clsName: "navbar-text",
  },
];
