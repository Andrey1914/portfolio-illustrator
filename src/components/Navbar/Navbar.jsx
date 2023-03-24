import React, { useState } from "react";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { NavbarContainer, NavLink } from "./NavbarStyled";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <NavbarContainer>
      <NavLink
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </NavLink>

      <NavLink
        href="#gallery"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsImages />
      </NavLink>
      <NavLink
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMailSend />
      </NavLink>
    </NavbarContainer>
  );
};
