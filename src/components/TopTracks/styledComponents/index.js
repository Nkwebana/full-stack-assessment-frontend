import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { theme } from '../../../utils/theme';

const TopTracksContainer = styled.div`
  ${breakpoint('tablet')`
    width: 369px;
    margin-left:10px;
  `}
`;

const TopTrackHeader = styled.h4`
  font-size: 25px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
  color: ${theme.colors.white};
`;

const Track = styled.div`
  padding: 10px;
  margin-top: 5px;
  background-color: ${theme.colors.grey};
  color: ${theme.colors.white};
  display: flex;
`;

const TrackNumber = styled.div`
  margin-right: 10px;
`;

const TrackTitle = styled.div`
  margin-right: auto;
`;

const NoTracksFoundMessage = styled.h4`
  color: ${theme.colors.white};
`;

export {
  TopTracksContainer,
  TopTrackHeader,
  Track,
  TrackNumber,
  TrackTitle,
  NoTracksFoundMessage,
};
