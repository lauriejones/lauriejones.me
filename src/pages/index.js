import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import { Margin, Padding, pt } from 'styled-components-spacing';
import { graphql } from 'gatsby';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';
import Stack from '../components/Stack';
import headshot from '../assets/lauriejones.jpg';

const HideBelowMd = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
`;

const HideAboveMd = styled.div`
  ${breakpoint('md')`
    display: none;
  `}
`;

const CenteredBelowMd = styled.div`
  text-align: center;
  ${breakpoint('md')`
    text-align: left;
  `}
`;

const CircleImage = styled.img`
  display: inline-block;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
`;

const Box = styled.div`
  border-top: 2px solid ${props => props.theme.colors.lightishGrey};
  ${pt(4)};
`;

const SHARED_SPACING_VALUE = 4;

const IndexPage = ({ data, theme }) => {
  const { edges: posts } = data.allMdx;
  const latestPost = posts[0].node;

  return (
    <Layout>
      <Panel>
        <Stack space={SHARED_SPACING_VALUE}>
          <HideAboveMd>
            <Margin bottom={3}>
              <CenteredBelowMd>
                <CircleImage
                  src={headshot}
                  alt="A headshot of Laurie Jones with tropical plants in the background"
                />
              </CenteredBelowMd>
            </Margin>
          </HideAboveMd>

          <Heading size={2} as="h1">
            <strong>Laurie Jones</strong> &mdash; front&ndash;end developer and
            designer based in Newcastle, Australia.
          </Heading>

          <Grid wrap={false}>
            <Grid.Unit size={{ lg: 'min' }}>
              <Stack space={SHARED_SPACING_VALUE}>
                <Copy size="large">
                  Professionally happiest at the intersection of UX and UI.
                  Passionate about enabling teams to build consistent,
                  high-quality and inclusive user interfaces.
                </Copy>

                <Copy>
                  Professionally happiest at the intersection of UX and UI.
                  Passionate about enabling teams to build consistent,
                  high-quality and inclusive user interfaces.
                </Copy>

                <Button to="/about/">More about me &#x2192;</Button>
              </Stack>
            </Grid.Unit>

            <HideBelowMd>
              <Grid.Unit size={{ lg: 'min' }}>
                <Padding left={4}>
                  <CircleImage
                    src={headshot}
                    alt="A headshot of Laurie Jones with tropical plants in the background"
                  />
                </Padding>
              </Grid.Unit>
            </HideBelowMd>
          </Grid>

          <Box>
            <Grid>
              <Grid.Unit size={{ lg: 0.5 }}>
                <Stack>
                  <Heading
                    size={6}
                    component="h2"
                    color={props => props.theme.colors.black54}
                  >
                    Latest blog post:
                  </Heading>
                  <Link to={latestPost.fields.slug} muted>
                    {latestPost.frontmatter.title}
                  </Link>
                </Stack>
              </Grid.Unit>
              <Grid.Unit size={{ lg: 0.5 }}>
                <Stack>
                  <Heading
                    size={6}
                    component="h2"
                    color={props => props.theme.colors.black54}
                  >
                    Working on:
                  </Heading>
                  <Link
                    href="http://nib-kaos-public-au-static-assets.s3-website-ap-southeast-2.amazonaws.com/design-system/master/"
                    muted
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mesh Design System
                  </Link>
                </Stack>
              </Grid.Unit>
            </Grid>
          </Box>
        </Stack>
      </Panel>
    </Layout>
  );
};

export const IndexPageQuery = graphql`
  query latestPost {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1) {
      edges {
        node {
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

export default IndexPage;
