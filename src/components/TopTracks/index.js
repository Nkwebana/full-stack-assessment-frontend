import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { convertSecondsToMinutes, truncate } from '../../utils/helpers';

import {
  TopTracksContainer,
  TopTrackHeader,
  Track,
  TrackNumber,
  TrackTitle,
  NoTracksFoundMessage,
} from './styledComponents';

function TopTracks({ topTracks, isTracksLoading }) {
  return (
    <TopTracksContainer>
      <TopTrackHeader>Top tracks:</TopTrackHeader>
      {!isTracksLoading && (
        <div>
          {topTracks.length > 0 ? (
            topTracks.map((track, index) => (
              <Track key={index}>
                <TrackNumber>{index + 1}</TrackNumber>
                <TrackTitle>{truncate(track.title, 23)}</TrackTitle>
                <div>{convertSecondsToMinutes(track.duration)}</div>
              </Track>
            ))
          ) : (
            <NoTracksFoundMessage>
              No to tracks found for this artist.
            </NoTracksFoundMessage>
          )}
        </div>
      )}

      {isTracksLoading && <CircularProgress />}
    </TopTracksContainer>
  );
}

TopTracks.propTypes = {
  topTracks: PropTypes.array,
  isTracksLoading: PropTypes.bool,
};

export default TopTracks;
