import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { NavContext } from '../../context';
import { DefaultLayoutProps } from '../../types';
import { LayoutContainer, Main } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme && theme.mixins && theme.mixins.toolbar
  })
);

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const classes = useStyles();
  const toggleNavigation = (
    event: React.KeyboardEvent | React.MouseEvent | null,
    showNavigation: boolean
  ): void => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setShowNavigation(showNavigation);
  };

  return (
    <NavContext.Provider value={{ showNavigation, toggleNavigation }}>
      <LayoutContainer className={classes.toolbar}>
        <Header />
        <Main>{children}</Main>
        <Nav />
      </LayoutContainer>
    </NavContext.Provider>
  );
};

export default DefaultLayout;
