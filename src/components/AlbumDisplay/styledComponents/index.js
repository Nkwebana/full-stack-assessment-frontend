import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia, Typography } from '@material-ui/core';

const AlbumContainer = styled.div``;

const AlbumCard = styled(Card)`
  max-width: 600px;
  margin: 20px;

  background-color: #595959 !important;

  ${breakpoint('tablet')`
    width: 368px;
    display:inline-block;
    margin-bottom: 0;

    :nth-child(even){
      margin-left: 0;
      margin-right: 0;
    }
  `}

  ${breakpoint('desktop')`
    width: 240px;
    height: 310px;
    margin-left: 0;

    :nth-child(even){
      margin-right:20px;
      margin-bottom:0;
    }

    :nth-child(4n){
      margin-right:0;
    }

  `}
`;

const AlbumCardMedia = styled(CardMedia)`
  height: 140px;
`;

const AlbumTypography = styled(Typography)`
  color: #fafafa;
`;

export { AlbumContainer, AlbumCard, AlbumCardMedia, AlbumTypography };
