import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia } from '@material-ui/core';

const ArtistContentCard = styled(Card)`
  margin-bottom: 10px;

  ${breakpoint('tablet')`
    width: 368px;
    margin-bottom: 10px;
    display:inline-block;
    :nth-child(even){
      margin-left: 10px;
    }
  `}

  ${breakpoint('laptop')`
    width: 328px;
    :nth-child(even){
      margin-left: 0;
    }
    :nth-child(3n-1){
      margin-left: 10px;
      margin-right: 10px;
    }
  `}
`;

const ArtistContentMedia = styled(CardMedia)`
  height: 140px;
`;

export { ArtistContentCard, ArtistContentMedia };
