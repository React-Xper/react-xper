import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Anchor, ResponsiveContext, Layer, Button } from 'grommet';
import { Header } from './styles/Header';
import { Switch } from './Switch';
import { useContext } from 'react';
import { Menu } from './styles/Menu';

function NavbarComponent({ location }) {
  const [openDialog, setOpenDialog] = useState(false);

  const size = useContext(ResponsiveContext);

  useEffect(() => {
    setOpenDialog(false);
  }, [location])

  return (
    <Header pad="medium" background="transparent" justify="end">
      {
        size !== 'small' &&
        <>
          <NavLink activeClassName="selected" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/about">About</NavLink>
          <NavLink activeClassName="selected" to="/lab">Lab</NavLink>
          <Anchor color="status-ok" href="https://github.com/m3yevn/reacthesis" target="_blank" rel="noopener noreferrer">Github</Anchor>
          <Switch />
        </>
      }
      {
        size === 'small' &&
        <>
          <Button onClick={() => { setOpenDialog(true) }}><AiOutlineMenu size={40} /></Button>
          {openDialog && (
            <Layer
              onEsc={() => setOpenDialog(false)}
              onClickOutside={() => setOpenDialog(false)}
            >
              <Header pad="medium" justify="end">
                <Button icon={<AiOutlineClose size={30} />} onClick={() => setOpenDialog(false)}>
                </Button>
              </Header>
              <Menu>
                <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                <NavLink activeClassName="selected" to="/about">About</NavLink>
                <NavLink activeClassName="selected" to="/lab">Lab</NavLink>
                <Anchor color="status-ok" href="https://github.com/m3yevn/reacthesis" target="_blank" rel="noopener noreferrer">Github</Anchor>
                <Switch />
              </Menu>
            </Layer>
          )}
        </>
      }
    </Header>)
}

export const Navbar = withRouter(NavbarComponent); 