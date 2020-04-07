import React, { useState, useEffect } from 'react';
import { Nav } from './style/Nav';
import { NavLink, withRouter } from 'react-router-dom';
import { Switch } from './Switch';
import useBreakpoint from './hooks/useBreakpoint';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Dialog } from './style/Dialog';

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

  const size = useBreakpoint();
  return (
    <Nav>
      {(size !== 'sm' && size !== 'xs') &&
        <div>
          <NavLink activeClassName="selected" to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/about">About</NavLink>
          <NavLink activeClassName="selected" to="/lab">Lab</NavLink>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
          <Switch />
        </div>}
      {(size === 'sm' || size === 'xs') &&
        <div>
          {!openDialog &&
            <AiOutlineMenu size="50" onClick={handleMenuClick} />
          }
          {openDialog &&
            <AiOutlineClose size="50" onClick={handleCloseClick} />
          }
        </div>
      }
      {(size === 'sm' || size === 'xs') && openDialog &&
        <>
          <Dialog open>
            <NavLink activeClassName="selected" to="/">Home</NavLink>
            <NavLink activeClassName="selected" to="/about">About</NavLink>
            <NavLink activeClassName="selected" to="/lab">Lab</NavLink>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
            <Switch />
          </Dialog>
        </>
      }
    </Nav>)
}

export const Navbar = withRouter(NavbarComponent); 