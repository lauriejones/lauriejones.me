import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Inline from '../components/Inline';
import Tag from '../components/Tag';
import Text from '../components/Text';
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
  console.log('Props', mdx.frontmatter.tags);
  return (
    <Layout>
      <Helmet>
        <title>{mdx.frontmatter.title}</title>
      </Helmet>
      <Panel width="36rem">
        <Stack>
          <Heading size={1}>{mdx.frontmatter.title}</Heading>
          <Text size="small" color={props => props.theme.colors.black54}>
            {mdx.frontmatter.date}
          </Text>
          <MDXRenderer>{mdx.body}</MDXRenderer>

          {mdx.frontmatter.tags && (
            <>
              <Heading size={3}>Tagged</Heading>
              <Inline>
                {mdx.frontmatter.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Inline>
            </>
          )}
          
          <div>
            <Link to="/blog/">&#x2190; Back to blog index</Link>
          </div>
        </Stack>
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
        tags
      }
    }
  }
`;
