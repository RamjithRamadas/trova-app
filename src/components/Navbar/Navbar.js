import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiSearch } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar-container">
        <Link to="#" className="navbar-menuIcon">
          <HiMenu onClick={showSidebar} />
        </Link>
        <Link to="#" className="navbar-menuIcon">
          <HiSearch />
        </Link>

        <img
          className="navbar-menuIcon"
          src="/images/trova_logo.png"
          alt="logo"
        />

        <Link to="#" className="navbar-menuIcon">
          <BiMessageRounded />
        </Link>

        <Link to="#" className="navbar-menuIcon">
          <MdNotificationsNone />
        </Link>
      </div>
      <nav className={sidebar ? "navbar-menu active" : "navbar-menu"}>
        <ul className="navbar-menuItems" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="navbar-menuClose">
              <AiOutlineCloseCircle />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.clsName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="navbar-toggleItems">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
