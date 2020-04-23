import { css, SerializedStyles } from '@emotion/core';
import config from '../config';

export const globalStyles = (props: { background: string }): SerializedStyles => css`
  body,
  code,
  html,
  input {
    font-family: ${config.emotion.typography.sansSerif};
    margin: 0;
    padding: 0;
  }

  body,
  html,
  #__next {
    height: 100%;
  }

  html {
    background: ${props.background};
  }
`;
