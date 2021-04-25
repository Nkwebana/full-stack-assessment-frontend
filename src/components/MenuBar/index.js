import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

import {
  AppBarBodyActions,
  AppBarSearchIcon,
  AppBarSearchInput,
  AppBarBody,
  AppBarChartIcon,
} from './styledComponents';

function MenuBar({ handleSearch }) {
  return (
    <AppBar position="sticky">
      <AppBarBody>
        <AppBarChartIcon />

        <AppBarBodyActions>
          <AppBarSearchIcon />

          <AppBarSearchInput
            placeholder="Search..."
            onChange={(event) => handleSearch(event.target.value)}
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
