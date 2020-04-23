/// <reference types="jest"/>

import config from '../../src/config';

describe('Config', () => {
  it('matches specification', () => {
    expect(Object.keys(config).length).toEqual(4);
    expect(Object.keys(config.pages).length).toBeGreaterThan(0);
    expect(Object.keys(config.emotion).length).toBeGreaterThan(0);
  });
  it('matches snapshot', () => {
    expect(config).toMatchSnapshot();
  });
});
