import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavWrapper } from "./Nav.style";

export const Nav: React.FunctionComponent = () => {
  return (
    <NavWrapper>
      <NavItem>
        <Link to={"/"}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={"/news"}>News</Link>
      </NavItem>
      <NavItem>
        <Link to={"/profile"}>Profile</Link>
      </NavItem>
    </NavWrapper>
  );
};
