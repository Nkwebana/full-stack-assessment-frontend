import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardContent, Typography } from '@material-ui/core';

import { FetchData } from '../../providers/FetchData';
import { formatNumberOfFans } from '../../utils/helpers';
import TopTracks from '../../components/TopTracks';
import AlbumDisplay from '../../components/AlbumDisplay';

import {
  ArtistDetailCard,
  CardMediaWrapper,
  ArtistDetailWrapper,
  CardBodyWrapper,
} from './styledComponents';

function ArtistDetails() {
  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isTracksLoading, setIsTracksLoading] = useState(false);
  const [isAlbumsLoading, setIsAlbumsLoading] = useState(false);

  const location = useLocation();
  const selectedArtist = location && location.state ? location.state : {};
  const { id, name, nb_fan, picture_big } = selectedArtist;

  const fetchArtistAlbums = async (artistId) => {
    setIsAlbumsLoading(true);

    const { success, data, error } = await FetchData.getArtistAlbum(artistId);

    setIsAlbumsLoading(false);

    if (error) {
      return alert(error);
    }

    if (success && data) {
      return setAlbums(data.data);
    }

    return false;
  };

  const fetchArtistTopTracks = async (artistId) => {
    setIsTracksLoading(true);

    const { success, data, error } = await FetchData.getArtistTopTracks(
      artistId
    );

    setIsTracksLoading(false);

    if (error) {
      return alert(error);
    }

    if (success && data) {
      return setTopTracks(data.data);
    }

    return false;
  };

  useEffect(() => {
    if (id) {
      fetchArtistTopTracks(id);
      fetchArtistAlbums(id);
    }
  }, [id]);

  return (
    <>
      <ArtistDetailWrapper>
        <ArtistDetailCard>
          <CardBodyWrapper>
            <CardMediaWrapper image={picture_big} />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>

              <Typography>Fans: {formatNumberOfFans(nb_fan)}</Typography>
            </CardContent>
          </CardBodyWrapper>
        </ArtistDetailCard>

        <TopTracks topTracks={topTracks} isTracksLoading={isTracksLoading} />
      </ArtistDetailWrapper>

      <AlbumDisplay albums={albums} isAlbumsLoading={isAlbumsLoading} />
    </>
  );
}

export default ArtistDetails;
