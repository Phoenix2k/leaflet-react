import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import manifest from '../../../public/manifest.json';
import { NavContext } from '../../context';
import { useStyles } from './styles';

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <NavContext.Consumer>
      {({ showNavigation, toggleNavigation }) => (
        <div className={classes.root}>
          <AppBar color="default" position="static">
            <Toolbar>
              <IconButton
                aria-label="menu"
                className={classes.menuButton}
                color="inherit"
                edge="start"
                onClick={() => toggleNavigation(null, !showNavigation)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {manifest.short_name}
              </Typography>
              <div>
                <IconButton
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  aria-label="account of current user"
                  color="inherit"
                  onClick={handleMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                  }}
                  id="menu-appbar"
                  keepMounted
                  onClose={handleClose}
                  open={open}
                  transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                  }}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </NavContext.Consumer>
  );
};

export default Header;
