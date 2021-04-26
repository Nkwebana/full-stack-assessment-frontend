import React from 'react';
import { CardActionArea, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import { formatNumberOfFans } from '../../utils/helpers';

import { ArtistContentCard, ArtistContentMedia } from './styledComponents';

function DisplayArtistContent({ artistsData, handleSelectArtist }) {
  return (
    <>
      {Array.isArray(artistsData) &&
        artistsData.map((artist, index) => (
          <ArtistContentCard
            key={index}
            onClick={() => handleSelectArtist(artist)}
          >
            <CardActionArea>
              <ArtistContentMedia image={artist.picture_big} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {artist.name}
                </Typography>

                <Typography>
                  Fans: {formatNumberOfFans(artist.nb_fan)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </ArtistContentCard>
        ))}
    </>
  );
}

DisplayArtistContent.propTypes = {
  handleSelectArtist: PropTypes.func,
  artistsData: PropTypes.array,
};

export default DisplayArtistContent;
