import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from '../theme/styled';

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  h1 {
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 6em;
    margin: 0.5rem;
  }
`;

export interface ErrorPageProps extends NextPageContext {
  statusCode?: number | null;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <Container>
    <Head>
      <title>{statusCode && `${statusCode} - `}Page not found</title>
    </Head>
    <h1 id="error-status-code">Error</h1>
    <h2>
      <code id="error-code">{statusCode || 'Unknown'}</code>
    </h2>
    <Link href="/">
      <a>Return to home page</a>
    </Link>
  </Container>
);

ErrorPage.getInitialProps = (props: NextPageContext): ErrorPageProps => {
  const { pathname, query, AppTree } = props;
  const statusCode = (props && props.res && props.res.statusCode) || null;
  return { AppTree, pathname, query, statusCode };
};

export default ErrorPage;
