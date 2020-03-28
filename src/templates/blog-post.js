import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';

const components = {
  // h2: props => <Heading size={2} {...props} />,
  // h3: props => <Heading size={3} {...props} />,
  // h4: props => <Heading size={4} {...props} />,
  // h5: props => <Heading size={5} {...props} />,
  // h6: props => <Heading size={6} {...props} />,
  a: Link,
};

export default function PageTemplate(props) {
  const {
    data: { mdx },
    children,
    ...rest
  } = props;
  console.log('Props', props);
  return (
    <Layout>
      <Panel>
        <Heading size={1}>{mdx.frontmatter.title}</Heading>
        <small>{mdx.frontmatter.date}</small>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Link to="/blog/" component={GatsbyLink}>
          Back to blog index
        </Link>
      </Panel>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
      }
    }
  }
`;
