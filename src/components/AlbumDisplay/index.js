import React from 'react';
import { CardActionArea, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { formatNumberOfFans, truncate } from '../../utils/helpers';

import {
  AlbumCard,
  AlbumCardMedia,
  NoAlbumsFoundMessage,
} from './styledComponents';

function AlbumDisplay({ albums, isAlbumsLoading }) {
  return (
    <>
      {!isAlbumsLoading && (
        <div>
          {Array.isArray(albums) && albums.length > 0 ? (
            albums.map((album, index) => (
              <AlbumCard key={index}>
                <CardActionArea>
                  <AlbumCardMedia image={album.cover_big} />

                  <CardContent>
                    <Typography variant="h6" component="h6">
                      {truncate(album.title, 45)}
                    </Typography>

                    <Typography>
                      Fans: {formatNumberOfFans(album.fans)}
                    </Typography>

                    <Typography>Released: {album.release_date}</Typography>
                  </CardContent>
                </CardActionArea>
              </AlbumCard>
            ))
          ) : (
            <NoAlbumsFoundMessage>
              No albums found for this artist.
            </NoAlbumsFoundMessage>
          )}
        </div>
      )}

      {isAlbumsLoading && <CircularProgress />}
    </>
  );
}

AlbumDisplay.propTypes = {
  albums: PropTypes.array,
  isAlbumsLoading: PropTypes.bool,
};

export default AlbumDisplay;
