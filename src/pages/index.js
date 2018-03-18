import React from 'react';
import styled from 'styled-components';
import {Margin} from 'styled-components-spacing';
import GatsbyLink from 'gatsby-link';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

import headshot from '../assets/lauriejones.jpg';

const Hr = styled.hr`
  margin: 0;
  border: none;
  border-top: .125rem solid rgba(0, 0, 0, .2);
  max-width: 2rem;
`;

const IndexPage = () => (
  <div>
    <Panel bg={props => props.theme.colors.nearWhite}>
      {/* <Heading size={3}>Laurie Jones</Heading> */}
      <Margin bottom={3}>
        <img src={headshot} style={{borderRadius: '50%'}} width="180" alt="A headshot of Laurie Jones with tropical plants in the background"/>
      </Margin>

      <Margin bottom={3}>
        <Copy size="large">Hi, I'm <strong>Laurie Jones</strong> and I'm a front-end developer and UI/UX designer based in Newcastle, Australia.</Copy>
      </Margin>

      {/* CSS · JS · React · Styled Components */}
      <Margin bottom={3}>
        <Copy>Currently I am working in the DesignOps team at <Link href="https://twitter.com/nibhealthfunds">@nibhealthfunds</Link> focusing on building and maintaining our <Link href="https://design.nib.com.au">Design System</Link> to enable our project teams to create cohesive experiences for our users.</Copy>
      </Margin>
      
      <Margin bottom={3}>
        <Copy>I work with CSS &middot; JS &middot; React &middot; Styled Components</Copy>
      </Margin>

      {/* <Link component={GatsbyLink} to="/page-2/">Go to page two!</Link> */}

      <Margin bottom={3}>
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
      </Copy>
    </Panel>
  </div>
);

export default IndexPage;
