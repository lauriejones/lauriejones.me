import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import {Margin, Padding} from 'styled-components-spacing';
import GatsbyLink from 'gatsby-link';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

import headshot from '../assets/lauriejones.jpg';

const Hr = styled.hr`
  margin: 0;
  border: none;
  border-top: .125rem solid hsla(0, 0%, 100%, .2);
  max-width: 2rem;
`;

const CenteredBelowMd = styled.div`
  text-align: center;
  ${breakpoint('md')`
    text-align: left;
  `}
`;

const IndexPage = () => (
  <div>
    <Panel>
      {/* <Heading size={3}>Laurie Jones</Heading> */}
      
      {/* <Margin bottom={3}>
        <CenteredBelowMd>
          <img src={headshot} style={{borderRadius: '50%'}} width="180" alt="A headshot of Laurie Jones with tropical plants in the background"/>
        </CenteredBelowMd>
      </Margin> */}

      <Margin bottom={4}>
        <Copy size="large" lineHeight="title" color={props => props.theme.colors.white87}>Hi, I'm <strong>Laurie Jones</strong> and I'm a front-end developer and UI/UX designer based in Newcastle, Australia.</Copy>
      </Margin>

      <Margin bottom={4}>
        <Hr/>
      </Margin>

      {/* CSS · JS · React · Styled Components */}

      <Grid>

        <Grid.Unit size={{lg: 'min' }}>
          <Padding right={4}>
            <img src={headshot} style={{borderRadius: '50%'}} width="180" alt="A headshot of Laurie Jones with tropical plants in the background"/>
          </Padding>
        </Grid.Unit>

        <Grid.Unit size={{lg: 'min' }}>
          <Margin bottom={3}>
            <Copy>I work in the DesignOps team at <Link href="https://twitter.com/nibhealthfunds">@nibhealthfunds</Link> focusing on building and maintaining our <Link href="https://design.nib.com.au">Design System</Link>.</Copy>
          </Margin>
          
          <Margin bottom={3}>
            <Copy>I build things with CSS, JS, React and Styled Components.</Copy>
          </Margin>
        </Grid.Unit>
        
      </Grid>

      {/* <Link component={GatsbyLink} to="/page-2/">Go to page two!</Link> */}

      {/* <Margin vertical={4}>
        <Hr/>
      </Margin>
      
      <Copy>
        <Link href="https://twitter.com/laurie_jones">Twitter</Link>
        <span> &middot; </span> 
        <Link href="https://github.com/lauriejones">GitHub</Link>
        <span> &middot; </span> 
        <Link href="https://npm.im/lauriejones">npm</Link>
        <span> &middot; </span> 
        <Link href="https://au.linkedin.com/in/lauriejonesme">Linked In</Link>
      </Copy> */}
      
    </Panel>
  </div>
);

export default IndexPage;
