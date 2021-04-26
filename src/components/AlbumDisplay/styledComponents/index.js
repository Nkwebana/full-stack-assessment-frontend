import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card, CardMedia } from '@material-ui/core';
import { theme } from '../../../utils/theme';

const AlbumCard = styled(Card)`
  margin-bottom: 10px;
  background-color: ${theme.colors.grey};

  ${breakpoint('tablet')`
    width: 368px;
    display:inline-block;
    margin-bottom: 10px;
    :nth-child(even){
      margin-left: 10px;
    }
  `};

  ${breakpoint('laptop')`
    width: 243.5px;
    height: 310px;
    :nth-child(4n-1){
      margin-left: 10px;
    }
  `};

  ${breakpoint('big')`
    width: 248.5px;
  `};
`;

const AlbumCardMedia = styled(CardMedia)`
  height: 140px;
`;

const NoAlbumsFoundMessage = styled.h4`
  color: ${theme.colors.white};
`;

export { AlbumCard, AlbumCardMedia, NoAlbumsFoundMessage };
