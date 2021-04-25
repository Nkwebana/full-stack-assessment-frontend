import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardContent } from '@material-ui/core';

import { FetchData } from '../../providers/FetchData';
import { formatNumberOfFans } from '../../utils/helpers';
import TopTracks from '../../components/TopTracks';
import AlbumDisplay from '../../components/AlbumDisplay';

import {
  ArtistDetailCard,
  CardMediaWrapper,
  CardTypography,
  ArtistDetailWrapper,
  CardBodyWrapper,
} from './styledComponents';

function ArtistDetails() {
  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isTracksLoading, setIsTracksLoading] = useState(false);

  const location = useLocation();
  const selectedArtist = location && location.state ? location.state : {};
  const { id, name, nb_fan, picture_big } = selectedArtist;

  const fetchArtistAlbums = async (artistId) => {
    const { success, data, error } = await FetchData.getArtistAlbum(artistId);

    if (error) {
      return alert(error);
    }

    if (success && data) {
      console.log(data.data);
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
  }, []);

  return (
    <>
      <ArtistDetailWrapper>
        <ArtistDetailCard>
          <CardBodyWrapper>
            <CardMediaWrapper image={picture_big} />

            <CardContent>
              <CardTypography gutterBottom variant="h5" component="h2">
                {name}
              </CardTypography>

              <CardTypography>
                Fans: {formatNumberOfFans(nb_fan)}
              </CardTypography>
            </CardContent>
          </CardBodyWrapper>
        </ArtistDetailCard>

        <TopTracks topTracks={topTracks} isTracksLoading={isTracksLoading} />
      </ArtistDetailWrapper>

      <AlbumDisplay albums={albums} />
    </>
  );
}

export default ArtistDetails;
