import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia, Typography } from '@material-ui/core';

const ArtistDetailCard = styled(Card)`
  width: 731px;
  background-color: #595959;

  margin-bottom: 30px;
`;

const CardMediaWrapper = styled(CardMedia)`
  width: 270px;
`;

const CardTypography = styled(Typography)`
  color: #fafafa;
`;

const ArtistDetailWrapper = styled.div`
  display: flex;
  height: 270px;
`;

const CardBodyWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export {
  ArtistDetailCard,
  CardMediaWrapper,
  CardTypography,
  ArtistDetailWrapper,
  CardBodyWrapper,
};
