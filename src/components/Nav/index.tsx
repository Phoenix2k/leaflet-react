import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import { useRouter } from 'next/router';
import React from 'react';
import { NavContext } from '../../context';
import { useStyles } from './styles';

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <NavContext.Consumer>
      {({ showNavigation, toggleNavigation }) => (
        <SwipeableDrawer
          anchor="bottom"
          onClose={() => toggleNavigation(null, false)}
          onOpen={() => toggleNavigation(null, true)}
          open={showNavigation}>
          <div
            className={classes.list}
            onClick={(event) => toggleNavigation(event, false)}
            onKeyDown={(event) => toggleNavigation(event, false)}
            role="presentation">
            <List>
              <ListItem button onClick={() => router.push('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={() => router.push('/color-markers')}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Color markers" />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      )}
    </NavContext.Consumer>
  );
};

export default Nav;
