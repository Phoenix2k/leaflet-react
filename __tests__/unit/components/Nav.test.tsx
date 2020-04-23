/// <reference types="jest"/>

import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import Renderer from 'react-test-renderer';
import Nav from '../../../src/components/Nav';

describe('Navigation', () => {
  const mockRouter: Partial<NextRouter> = {
    push: (url: string) => Promise.resolve(!!url)
  };

  it('matches snapshot', () => {
    const snapshotRender = Renderer.create(
      // @ts-ignore: Test push method only
      <RouterContext.Provider value={mockRouter}>
        <Nav />
      </RouterContext.Provider>
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
