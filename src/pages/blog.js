import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Text from '../components/Text';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Stack from '../components/Stack';

const PageHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  ${List} > & + & {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px dashed rgba(0, 0, 0, 0.1);
  }
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Helmet>
        <title>Personal blog</title>
      </Helmet>
      <Panel>
        <div>
          <PageHeader>
            <Heading size={1}>Personal blog &mdash;</Heading>
            <Text color={props => props.theme.colors.black54}>
              Written for me, but maybe also for you.{' '}
              <span aria-hidden>✨</span>
            </Text>
          </PageHeader>

          <List>
            {posts.map(({ node: post }) => (
              <ListItem key={post.id}>
                <Stack>
                  <Heading size={2} as="h2">
                    <Link
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </Heading>
                  <Text>{post.excerpt}</Text>
                  <Text
                    size="small"
                    color={props => props.theme.colors.black54}
                    as="time"
                  >
                    {post.frontmatter.date}
                  </Text>
                </Stack>
              </ListItem>
            ))}
          </List>
        </div>
      </Panel>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;
