import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Header } from 'grommet';

function NavbarComponent({location}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleMenuClick = () => {
    setOpenDialog(true);
  }
  const handleCloseClick = () => {
    setOpenDialog(false);
  }

  useEffect(() => {
    setOpenDialog(false);
  },[location])

  return (
    <Header background="transparent"></Header>)
}

export const Navbar = withRouter(NavbarComponent); 