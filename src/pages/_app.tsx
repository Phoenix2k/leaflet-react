import { Global } from '@emotion/core';
import { PaletteType, useMediaQuery } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions
} from '@material-ui/core/styles';
import { ThemeProvider } from 'emotion-theming';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ReactAxeConfig } from 'react-axe';
import ReactDOM from 'react-dom';
import manifest from '../../public/manifest.json';
import config from '../config';
import { useLocalState } from '../helpers';
import { globalStyles, leafletStyles } from '../theme';

interface AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, {}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps?: any;
}

/* istanbul ignore next */
if (
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  config.a11yEnv.includes(process.env.NODE_ENV)
) {
  const reactAxe = require('react-axe');
  const reactAxeConfig: ReactAxeConfig = {
    rules: [
      {
        enabled: false,
        id: 'region'
      }
    ]
  };
  reactAxe(React, ReactDOM, 1000, reactAxeConfig);
}

const NextApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [paletteType, setPaletteType] = useLocalState(
    prefersDarkMode ? 'dark' : 'light',
    'color-scheme'
  );

  useEffect(() => {
    const newPalette = prefersDarkMode ? 'dark' : 'light';
    setPaletteType(newPalette);
  }, [prefersDarkMode, setPaletteType]);

  const options: ThemeOptions = {
    ...config.materialUI,
    palette: {
      ...config.materialUI.palette,
      type: paletteType as PaletteType
    }
  };

  const materialUITheme = React.useMemo(() => createMuiTheme(options), [options]);
  return (
    <>
      <Head>
        <link key="manifest" rel="manifest" href="/manifest.json" />
        <meta key="theme-color" name="theme-color" content={manifest.theme_color} />
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={config.emotion}>
        <Global styles={globalStyles({ background: materialUITheme.palette.background.default })} />
        <Global styles={leafletStyles} />
        <MuiThemeProvider theme={materialUITheme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default NextApp;
