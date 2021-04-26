import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';

import {
  AppBarBodyActions,
  AppBarSearchIcon,
  AppBarSearchInput,
  AppBarBody,
  AppBarChartIcon,
} from './styledComponents';
import { debounce } from '../../utils/helpers';

function MenuBar({ handleSearch }) {
  const handleArtistSearch = debounce(
    (searchText) =>
      handleSearch &&
      typeof handleSearch === 'function' &&
      handleSearch(searchText),
    300
  );

  return (
    <AppBar position="sticky">
      <AppBarBody>
        <AppBarChartIcon />

        <AppBarBodyActions>
          <AppBarSearchIcon />

          <AppBarSearchInput
            placeholder="Search..."
            onChange={(event) => handleArtistSearch(event.target.value)}
          />
        </AppBarBodyActions>
      </AppBarBody>
    </AppBar>
  );
}

MenuBar.propTypes = {
  handleSearch: PropTypes.func,
};

export default MenuBar;
