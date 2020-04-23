import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

global.console = {
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  log: jest.fn(),
  table: jest.fn(),
  warn: jest.fn()
};

React.useLayoutEffect = React.useEffect;

require('jsdom-global')(undefined, {
  url: 'http://localhost'
});
