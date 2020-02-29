import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Heading from '../components/Heading';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <div>
        <Heading size={1}>My blog</Heading>

        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
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
