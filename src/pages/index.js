import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Margin, Padding, pt, mb, py, ml, pr } from 'styled-components-spacing';
import { graphql } from 'gatsby';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Text from '../components/Text';
import Stack from '../components/Stack';
import headshot from '../assets/2020-sml.jpg';
import { MESH_URL } from '../constants';

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
  width: 12.5rem;
  position: relative;
`;

const Wrap = styled.div`
  position: relative;

  ::before {
    content: '';
    background: ${props => props.theme.colors.black06};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: rotate(10deg);
  }
`;

const boxBorder = css`2px dashed ${props => props.theme.colors.lightishGrey}`;

const Box = styled.div`
  ${py(3)};
  border-top: ${boxBorder};
  border-bottom: ${boxBorder};
`;

const FGU = styled(Grid.Unit)`
  display: flex;
`;

const Divider = styled.div`
  width: 100%;
  ${pt(3)};
  border-bottom: 2px dashed ${props => props.theme.colors.lightishGrey};
  ${mb(3)};

  ${breakpoint('lg')`
    ${pt(0)};
    ${mb(0)};
      border-bottom: none;
      border-left: 2px solid ${props => props.theme.colors.lightishGrey};
      ${pr(3)};
      ${ml(3)};
  `}
`;

const Strong = styled.strong`
  /* background-color: ${props => props.theme.focus}; */
  /* background: ${props =>
    `linear-gradient(${props.theme.colors.blue}, ${props.theme.colors.blue})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; */
`;

const SHARED_SPACING_VALUE = 4;

const IndexPage = ({ data, theme }) => {
  const { edges: posts } = data.allMdx;
  const latestPost = posts[0].node;

  return (
    <Layout>
      <Panel>
        <Stack space={SHARED_SPACING_VALUE}>
          <Heading size={1} as="h1">
            <Strong>Laurie Jones</Strong> &mdash; front&ndash;end developer and
            designer based in Newcastle, Australia.
          </Heading>

          <Grid wrap={false}>
            <Grid.Unit size={{ lg: 'min' }}>
              <Stack space={SHARED_SPACING_VALUE}>
                <Text size="large">
                  Professionally happiest at the intersection of UX and UI.
                  Passionate about enabling teams to build consistent,
                  high-quality and inclusive user interfaces.
                </Text>

                <Text>
                  Design systems are my JAM. Stack components FTW. Make
                  components more reusable and composable. Constantly making
                  breaking changes.
                </Text>

                <Button to="/about/">More about me &#x2192;</Button>
              </Stack>
            </Grid.Unit>

            <HideBelowMd>
              <Grid.Unit size={{ lg: 'min' }}>
                <Padding left={4}>
                  <Wrap>
                    <CircleImage
                      src={headshot}
                      alt="A headshot of Laurie Jones with tropical plants in the background"
                    />
                  </Wrap>
                </Padding>
              </Grid.Unit>
            </HideBelowMd>
          </Grid>

          <Box style={{ marginTop: '3rem' }}>
            <Grid wrap={{ lg: false }}>
              <Grid.Unit size={{ lg: 0.5 }}>
                <Stack space={2}>
                  <Heading
                    size={6}
                    component="h2"
                    color={props => props.theme.colors.black54}
                  >
                    I&rsquo;m trying to blog:
                  </Heading>
                  <Link to={latestPost.fields.slug} muted>
                    {latestPost.frontmatter.title}
                  </Link>
                </Stack>
              </Grid.Unit>
              <FGU size={{ lg: 'min' }}>
                <Divider />
              </FGU>
              <Grid.Unit size={{ lg: 0.5 }}>
                <Stack space={2}>
                  <Heading
                    size={6}
                    component="h2"
                    color={props => props.theme.colors.black54}
                  >
                    What I&lsquo;m working on:
                  </Heading>
                  <Link
                    href={MESH_URL}
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
