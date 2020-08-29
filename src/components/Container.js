import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => (props.width ? props.width : props.theme.container)};
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
