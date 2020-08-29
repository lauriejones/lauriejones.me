import styled from 'styled-components';
import { mt } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import { spacing } from './theme';

const Stack = styled.div`
  &&& > * + * {
    ${props => mt(props.space)};
  }
`;

Stack.propTypes = {
  space: PropTypes.oneOf(Object.keys(spacing)),
};

Stack.defaultProps = {
  space: 3,
};

export default Stack;
