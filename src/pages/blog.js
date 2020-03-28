import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Copy from '../components/Copy';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';

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
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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
            <Heading size={1}>Personal blog</Heading>
            <Copy color={props => props.theme.colors.black54}>
              Written for me, but maybe also for you.{' '}
              <span aria-hidden>✨</span>
            </Copy>
          </PageHeader>

          <List>
            {posts.map(({ node: post }) => (
              <ListItem key={post.id}>
                <Heading size={2}>
                  <Link to={post.fields.slug} component={GatsbyLink}>
                    {post.frontmatter.title}
                  </Link>
                </Heading>
                <Copy>{post.excerpt}</Copy>
                <small>{post.frontmatter.date}</small>
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
    allMdx {
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
