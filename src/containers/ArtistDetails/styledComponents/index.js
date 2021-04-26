import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia } from '@material-ui/core';
import { theme } from '../../../utils/theme';

const ArtistDetailCard = styled(Card)`
  margin-bottom: 10px;
  background-color: ${theme.colors.grey};

  ${breakpoint('tablet')`
    width:369px;
    margin-bottom: 0;
  `};

  ${breakpoint('laptop')`
    width:100%;
  `};
`;

const CardMediaWrapper = styled(CardMedia)`
  height: 140px;

  ${breakpoint('laptop')`
    width: 270px;
    height: 100%;
  `};
`;

const ArtistDetailWrapper = styled.div`
  margin-bottom: 25px;

  ${breakpoint('tablet')`
    display: flex;
    height: 250px;
  `}
`;

const CardBodyWrapper = styled.div`
  ${breakpoint('laptop')`
    display: flex;
    height: 100%;
  `}
`;

export {
  ArtistDetailCard,
  CardMediaWrapper,
  ArtistDetailWrapper,
  CardBodyWrapper,
};
