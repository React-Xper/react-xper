import React, { useState, useEffect } from "react";
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
import { useContext } from "react";
import { Menu } from "components/styles/Menu";
import { useTheme } from "styled-components";

function NavbarComponent({ location }) {
  const [openDialog, setOpenDialog] = useState(false);

  const size = useContext(ResponsiveContext);
  const dark = useTheme(ThemeContext).dark;

  useEffect(() => {
    setOpenDialog(false);
  }, [location]);

  return (
    <Header pad="medium" background="transparent" justify="end">
      {size !== "small" && (
        <>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="selected" to="/concepts-lab">
            Concepts
          </NavLink>
          <NavLink activeClassName="selected" to="/components-lab">
            Components
          </NavLink>
          <Anchor
            color="status-ok"
            href="https://github.com/m3yevn/react-xper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Anchor>
          <Switch />
        </>
      )}
      {size === "small" && (
        <>
          <Button
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <AiOutlineMenu size={40} />
          </Button>
          {openDialog && (
            <Layer
              style={{ background: dark ? "black" : "white" }}
              onEsc={() => setOpenDialog(false)}
              onClickOutside={() => setOpenDialog(false)}
            >
              <Header pad="medium" justify="end">
                <Button
                  icon={
                    <AiOutlineClose
                      size={30}
                      color={dark ? "white" : "black"}
                    />
                  }
                  onClick={() => setOpenDialog(false)}
                ></Button>
              </Header>
              <Menu>
                <NavLink activeClassName="selected" exact to="/">
                  Home
                </NavLink>
                <NavLink activeClassName="selected" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName="selected" to="/concepts-lab">
                  Concepts
                </NavLink>
                <NavLink activeClassName="selected" to="/components-lab">
                  Components
                </NavLink>
                <Anchor
                  color="status-ok"
                  href="https://github.com/m3yevn/react-xper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Anchor>
                <Switch />
              </Menu>
            </Layer>
          )}
        </>
      )}
    </Header>
  );
}

export const Navbar = withRouter(NavbarComponent);
