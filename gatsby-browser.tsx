import type { GatsbyBrowser } from 'gatsby';
import React from 'react';

import { App } from './src/App';
import './styles/globalStyles.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <App>{element}</App>;
};
