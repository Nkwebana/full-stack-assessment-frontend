import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const AppContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 10px;

  ${breakpoint('laptop')`
    margin-top: 20px;
    margin-bottom: 20px;
  `}
`;

export { AppContainer };
