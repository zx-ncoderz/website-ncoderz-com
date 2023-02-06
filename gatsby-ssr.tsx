import type { GatsbySSR } from 'gatsby';
import React from 'react';

import { App } from './src/App';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <App>{element}</App>;
};
