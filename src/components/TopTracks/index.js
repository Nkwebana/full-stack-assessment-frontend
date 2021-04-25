import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { convertSecondsToMinutes } from '../../utils/helpers';

import {
  TopTracksContainer,
  TopTrackHeader,
  Track,
  TrackNumber,
  TrackTitle,
} from './styledComponents';

function TopTracks({ topTracks, isTracksLoading }) {
  return (
    <TopTracksContainer>
      <TopTrackHeader>Top tracks:</TopTrackHeader>

      {topTracks.length > 0 &&
        topTracks.map((track, index) => (
          <Track key={index}>
            <TrackNumber>{index + 1}</TrackNumber>
            <TrackTitle>{track.title}</TrackTitle>
            <div>{convertSecondsToMinutes(track.duration)}</div>
          </Track>
        ))}

      {isTracksLoading && <CircularProgress />}
    </TopTracksContainer>
  );
}

TopTracks.propTypes = {
  topTracks: PropTypes.array,
  isTracksLoading: PropTypes.bool,
};

export default TopTracks;
