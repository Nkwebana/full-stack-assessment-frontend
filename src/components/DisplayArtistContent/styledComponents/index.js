import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia, Typography } from '@material-ui/core';

const ArtistContentCard = styled(Card)`
  max-width: 600px;
  margin: 10px;

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

  /* ${breakpoint('laptop')`
    width:200px;
  `}; */

  ${breakpoint('desktop')`
    width: 328px;
    height: 260px;

    :nth-child(even){
      margin:10px;
      margin-bottom:0;
    }

    :nth-child(3n-1){
      margin-left: 0;
      margin-right: 0;
    }

    :nth-child(3n){
      margin-right: 0;
    }
  `}
`;

const ArtistContentMedia = styled(CardMedia)`
  height: 140px;
`;

const ArtistContentTypography = styled(Typography)`
  color: #fafafa;
`;

export { ArtistContentCard, ArtistContentMedia, ArtistContentTypography };
