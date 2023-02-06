import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteName: `n[coder]z`,
    sourceUrl: `https://github.com/zx-ncoderz/website-ncoderz-com`,
  },
  plugins: [
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};

// eslint-disable-next-line arca/no-default-export
export default config;
