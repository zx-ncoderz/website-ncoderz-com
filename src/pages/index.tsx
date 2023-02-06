import { graphql, PageProps } from 'gatsby';
import React from 'react';

// You can also use https://github.com/dotansimha/graphql-code-generator
// to generate types from a GraphQL schema
interface IndexPageProps {
  site: {
    siteMetadata: {
      siteName: string;
      sourceUrl: string;
    };
  };
}

const Index = ({ data: { site } }: PageProps<IndexPageProps>) => {
  return (
    <main>
      <h1>{site.siteMetadata.siteName}</h1>
      {/* <p className="custom-text">Welcome to {site.siteMetadata.siteName}</p> */}
    </main>
  );
};

// eslint-disable-next-line arca/no-default-export
export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
        sourceUrl
      }
    }
  }
`;
