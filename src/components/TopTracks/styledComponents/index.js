import styled from 'styled-components';

const TopTracksContainer = styled.div`
  margin-left: 20px;
`;

const TopTrackHeader = styled.h4`
  font-size: 25px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 10px;
  color: white;
`;

const Track = styled.div`
  width: 250px;
  padding: 10px;
  background-color: #595959;
  margin-top: 5px;
  color: white;
  display: flex;
`;

const TrackNumber = styled.div`
  margin-right: 10px;
`;

const TrackTitle = styled.div`
  margin-right: auto;
`;

export { TopTracksContainer, TopTrackHeader, Track, TrackNumber, TrackTitle };
