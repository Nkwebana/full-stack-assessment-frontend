import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import Home from '../src/containers/Home';
import ArtistDetails from '../src/containers/ArtistDetails';
import { FetchData } from '../src/providers/FetchData';
import MenuBar from '../src/components/MenuBar';

import { AppContainer } from './appStyledComponent';

function App() {
  const saveArtists = useStoreActions((actions) => actions.artist.add);

  const handleSearch = async (searchText) => {
    const { data, error } = await FetchData.getArtistData(searchText);

    if (error) {
      return alert(error);
    }

    return saveArtists(data.data);
  };

  useEffect(() => {
    handleSearch('link');
  }, []);

  return (
    <>
      <MenuBar handleSearch={handleSearch} />
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={ArtistDetails} />
        </Switch>
      </AppContainer>
    </>
  );
}

export default App;
