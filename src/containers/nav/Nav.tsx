import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavWrapper } from "./Nav.style";

interface NavProps {
  isAuth: boolean;
}

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { isAuth } = props;
  return (
    <NavWrapper>
      <NavItem>
        <Link to={"/"}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={"/news"}>News</Link>
      </NavItem>
      {isAuth ? (
        <NavItem>
          <Link to={"/profile"}>Profile</Link>
        </NavItem>
      ) : (
        <NavItem>
          <Link to={"/sign-in"}>Sign in</Link>
        </NavItem>
      )}
    </NavWrapper>
  );
};
