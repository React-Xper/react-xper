import React, { useState, useEffect, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Anchor,
  ResponsiveContext,
  Layer,
  Button,
  ThemeContext,
} from "grommet";
import { Header } from "components/styles/Header";
import { Switch } from "./Switch";
import { Menu } from "components/styles/Menu";
import { useTheme } from "styled-components";
import { BRAND, PRODUCTS } from "constants/brand";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/patterns", label: "Patterns" },
  { to: "/components", label: "Components" },
];

function NavbarComponent({ location }) {
  const [openDialog, setOpenDialog] = useState(false);
  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  useEffect(() => {
    setOpenDialog(false);
  }, [location]);

  const links = (
    <>
      <Anchor
        color="status-ok"
        href={PRODUCTS.ui.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        weight="bold">
        {PRODUCTS.ui.shortName}
      </Anchor>
      <NavLink activeClassName="selected" exact to="/">
        {PRODUCTS.studio.shortName}
      </NavLink>
      {navLinks.slice(1).map((link) => (
        <NavLink
          key={link.to}
          activeClassName="selected"
          exact={link.exact}
          to={link.to}>
          {link.label}
        </NavLink>
      ))}
      <Anchor
        color="status-ok"
        href={PRODUCTS.ui.npmUrl}
        target="_blank"
        rel="noopener noreferrer">
        {PRODUCTS.ui.shortName} npm
      </Anchor>
      <Anchor
        color="status-ok"
        href={BRAND.githubUrl}
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </Anchor>
      <Switch />
    </>
  );

  return (
    <Header pad="medium" background="transparent" justify="end">
      {size !== "small" && links}
      {size === "small" && (
        <>
          <Button onClick={() => setOpenDialog(true)}>
            <AiOutlineMenu size={40} />
          </Button>
          {openDialog && (
            <Layer
              style={{ background: dark ? "black" : "white" }}
              onEsc={() => setOpenDialog(false)}
              onClickOutside={() => setOpenDialog(false)}>
              <Header pad="medium" justify="end">
                <Button
                  icon={
                    <AiOutlineClose size={30} color={dark ? "white" : "black"} />
                  }
                  onClick={() => setOpenDialog(false)}
                />
              </Header>
              <Menu>{links}</Menu>
            </Layer>
          )}
        </>
      )}
    </Header>
  );
}

export const Navbar = withRouter(NavbarComponent);
