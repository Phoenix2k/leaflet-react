import React from 'react';

export const NavContext = React.createContext({
  showNavigation: false,
  toggleNavigation: (
    event: React.KeyboardEvent | React.MouseEvent | null,
    showNavigation: boolean
  ) => {
    return;
  }
});
