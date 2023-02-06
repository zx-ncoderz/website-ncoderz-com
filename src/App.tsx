import React from 'react';

import Layout from './layouts/layout';

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  return <Layout>{children}</Layout>;
};

export { App };
