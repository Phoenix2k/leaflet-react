import { Config } from '../types';
import emotionTheme from './emotion';
import materialUIOptions from './material-ui';
import pages from './pages';

const config: Config = {
  a11yEnv: ['development'],
  emotion: emotionTheme,
  materialUI: materialUIOptions,
  pages
};

export default config;
