import React from 'react';

import DisplayArtistContent from '../../components/DisplayArtistContent';
import { useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const artistsData = useStoreState((state) => state.artist.artists);

  const handleSelectArtist = (selectedArtist) => {
    history.push('/details', selectedArtist);
  };

  return (
    <>
      <DisplayArtistContent
        artistsData={artistsData}
        handleSelectArtist={handleSelectArtist}
      />
    </>
  );
}

export default Home;
