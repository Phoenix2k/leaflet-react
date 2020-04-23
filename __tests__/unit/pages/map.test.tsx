/// <reference types="jest"/>

import { createMuiTheme } from '@material-ui/core/styles';
import { createMount, createRender } from '@material-ui/core/test-utils';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'emotion-theming';
import { NextRouter } from 'next/router';
import sitemap from '../../../data/sitemap.json';
import config from '../../../src/config';
import ColorMarkers from '../../../src/pages/color-markers';

jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
      route: '/color-markers'
    };
  }
}));

describe('Map page', () => {
  const materialUITheme = createMuiTheme(config.materialUI);
  const mount = createMount();

  it('has the correct title', () => {
    const wrapper = mount(
      <ThemeProvider theme={config.emotion}>
        <MuiThemeProvider theme={materialUITheme}>
          <ColorMarkers />
        </MuiThemeProvider>
      </ThemeProvider>
    );
    expect(wrapper.find('h1').text()).toEqual(sitemap.colorMarkers.title);
  });

  it('matches snapshot', () => {
    const snapshotRender = createRender();
    const snapshot = snapshotRender(
      <ThemeProvider theme={config.emotion}>
        <MuiThemeProvider theme={materialUITheme}>
          <ColorMarkers />
        </MuiThemeProvider>
      </ThemeProvider>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
