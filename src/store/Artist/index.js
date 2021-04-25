import { action } from 'easy-peasy';

export const artist = {
  artists: [],
  add: action((state, newArtists) => {
    state.artists = newArtists;
  }),
};
