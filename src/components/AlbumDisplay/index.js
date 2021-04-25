import React from 'react';
import { CardActionArea, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

import { formatNumberOfFans } from '../../utils/helpers';

import {
  AlbumCard,
  AlbumCardMedia,
  AlbumContainer,
  AlbumTypography,
} from './styledComponents';

function AlbumDisplay({ albums }) {
  return (
    <AlbumContainer>
      {Array.isArray(albums) &&
        albums.map((album, index) => (
          <AlbumCard key={index}>
            <CardActionArea>
              <AlbumCardMedia image={album.cover_big} />

              <CardContent>
                <AlbumTypography variant="h6" component="h6">
                  {album.title}
                </AlbumTypography>

                <AlbumTypography>
                  Fans: {formatNumberOfFans(album.fans)}
                </AlbumTypography>

                <AlbumTypography>
                  Released: {album.release_date}
                </AlbumTypography>
              </CardContent>
            </CardActionArea>
          </AlbumCard>
        ))}
    </AlbumContainer>
  );
}

AlbumDisplay.propTypes = {
  handleSelectArtist: PropTypes.func,
  artistsData: PropTypes.array,
};

export default AlbumDisplay;
