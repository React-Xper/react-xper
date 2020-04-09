import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Anchor } from 'grommet';
import { Header } from './styles/Header';
import { Switch } from './Switch';

function NavbarComponent({ location }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleMenuClick = () => {
    setOpenDialog(true);
  }
  const handleCloseClick = () => {
    setOpenDialog(false);
  }

  useEffect(() => {
    setOpenDialog(false);
  }, [location])

  return (
    <Header pad="medium" background="transparent" justify="end">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>
      <NavLink activeClassName="selected" to="/about">About</NavLink>
      <NavLink activeClassName="selected" to="/lab">Lab</NavLink>
      <Anchor color="status-ok" href="https://github.com/m3yevn/reacthesis" target="_blank" rel="noopener noreferrer">Github</Anchor>
      <Switch />
    </Header>)
}

export const Navbar = withRouter(NavbarComponent); 