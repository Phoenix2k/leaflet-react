/// <reference types="jest"/>

import { createMuiTheme } from '@material-ui/core/styles';
import { createMount, createRender } from '@material-ui/core/test-utils';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'emotion-theming';
import { NextRouter } from 'next/router';
import sitemap from '../../../data/sitemap.json';
import config from '../../../src/config';
import Home from '../../../src/pages/index';

jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
      route: '/'
    };
  }
}));

describe('Index page', () => {
  const materialUITheme = createMuiTheme(config.materialUI);

  it('has the correct title', () => {
    const mount = createMount();
    const wrapper = mount(
      <ThemeProvider theme={config.emotion}>
        <MuiThemeProvider theme={materialUITheme}>
          <Home />
        </MuiThemeProvider>
      </ThemeProvider>
    );
    expect(wrapper.find('h1').text()).toEqual(sitemap.home.title);
  });

  it('matches snapshot', () => {
    const render = createRender();
    const snapshot = render(
      <ThemeProvider theme={config.emotion}>
        <MuiThemeProvider theme={materialUITheme}>
          <Home />
        </MuiThemeProvider>
      </ThemeProvider>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
