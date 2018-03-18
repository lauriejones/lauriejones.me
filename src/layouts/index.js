import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import GrowLayout from '@nib-components/grow-layout';

import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../components/Theme';

import favIcon from './favicons/favicon.ico';
import favIcon16 from './favicons/favicon-16x16.png';
import favIcon32 from './favicons/favicon-32x32.png';
import androidChrome192 from './favicons/android-chrome-192x192.png';
import androidChrome512 from './favicons/android-chrome-512x512.png';
import appleTouchIcon from './favicons/apple-touch-icon.png';
import safariPinnedTab from './favicons/safari-pinned-tab.svg';
import mstile from './favicons/mstile-150x150.png';

injectGlobal`
  ${styledNormalize}

  :root {
    font-size: 16px;
  }

  @media screen and (min-width: 30em) {
    :root {
      font-size: calc(16px + (21 - 16) * ( (100vw - 400px) / ( 1200 - 400) ));
    }
  }

  @media screen and (min-width: 60em) {
    :root {
      font-size: 21px;
    }
  }

  *:focus {
    outline: 3px solid #ffeb3b;
  }

  body {
    color: ${theme.copy.color};
    font-family: ${theme.copy.fontFamily};
    font-size: ${theme.copy.fontSize};
    line-height: ${theme.copy.lineHeight};
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}> 
    <div>
      <GrowLayout.Wrapper>
        <Helmet>
          <title>Laurie Jones &mdash; Frontend developer &amp; designer based in Newcastle, Australia"</title>
          <meta name="description" content="Laurie Jones is a frontend developer and designer focused on design systems"/>
          <meta name="keywords" content="laurie jones, frontend developer, react developer, ui designer, ux designer, design systems, designops"/>
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
          <link rel="icon" href={favIcon}/>
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16}/>
          <link rel="mask-icon" href={safariPinnedTab} color={props => props.theme.colors.green}/>
          <meta name="msapplication-TileColor" content={props => props.theme.colors.green}/>
          <meta name="theme-color" content={props => props.theme.colors.white}/>
        </Helmet>
        <Header />
        <GrowLayout.Content>
          <div>
            {children()}
          </div>
        </GrowLayout.Content>
        <Footer/>
      </GrowLayout.Wrapper>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
