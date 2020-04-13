import styled from 'styled-components';
import { mb, mr } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import { spacing } from './theme';

const Inline = styled.div`
  /* Negative margin to offset the extraneous margin-bottom on the last row of inline elements */
  /* margin-bottom: -1rem; */

  > *:not(:last-child) {
    ${props => mb(props.space)};
    ${props => mr(props.space)};
  }
`;

Inline.propTypes = {
  space: PropTypes.oneOf(Object.keys(spacing)),
};

Inline.defaultProps = {
  space: 1,
};

export default Inline;
