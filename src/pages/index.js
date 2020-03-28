import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import { Margin, Padding, px, py, mr, mb } from 'styled-components-spacing';
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

const Tag = styled.span`
  ${px(3)};
  ${py(2)};
  ${mb(1)};
  ${mr(1)};
  display: inline-block;
  border-radius: 100px;
  background-color: ${props => props.theme.colors.black06};
  font-size: ${props => props.theme.typeScale[6]};
  line-height: ${props => props.theme.lineHeights.solid};
`;

const SHARED_SPACING_VALUE = 4;

const IndexPage = () => (
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
              <div bottom={4}>
                <Copy size="large">
                  Professionally happiest at the intersection of UX and UI.
                  Currently working in the DesignOps space at{' '}
                  <Link href="https://twitter.com/nibhealthfunds">
                    @nibhealthfunds
                  </Link>{' '}
                  focused on improving our{' '}
                  <Link href="https://design.nib.com.au">design system</Link>{' '}
                  and processes.
                </Copy>
              </div>

              <Button to="/about/">More about me &#x2192;</Button>

              {/* <Margin bottom={4}>
            <Copy>
              Passionate about empowering teams to quickly build consistent,
              high-quality and inclusive user interfaces.
            </Copy>
          </Margin> */}

              {/* <Tag>CSS</Tag>
            <Tag>HTML</Tag>
            <Tag>JS</Tag>
            <Tag>Accessibility</Tag>
            <Tag>Design Systems</Tag>
            <Tag>React</Tag>
            <Tag>Styled Components</Tag>
            <Tag>Gatsby</Tag>
            <Tag>UX</Tag>
            <Tag>UI</Tag> */}
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
      </Stack>
    </Panel>
  </Layout>
);

export default IndexPage;
