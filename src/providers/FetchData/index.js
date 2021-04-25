import {
  SEARCH_ARTISTS_URL,
  FETCH_ARTIST_TOP_TRACKS_URL,
  FETCH_ARTIST_ALBUMS_URL,
} from '../constants';

export class FetchData {
  static async getArtistData(searchText) {
    const response = await fetch(
      SEARCH_ARTISTS_URL + `?searchText=${searchText}`
    );

    return response.json();
  }

  static async getArtistTopTracks(artistId) {
    const response = await fetch(
      FETCH_ARTIST_TOP_TRACKS_URL + `?artistId=${artistId}`
    );

    return response.json();
  }

  static async getArtistAlbum(artistId) {
    const response = await fetch(
      FETCH_ARTIST_ALBUMS_URL + `?artistId=${artistId}`
    );

    return response.json();
  }
}
