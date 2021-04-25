import styled from 'styled-components';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BarChartIcon from '@material-ui/icons/BarChart';

const AppBarBody = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const AppBarBodyActions = styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 420px;
  height: 40px;
  margin-left: 5px;
  margin-right: 10px;
  background-color: #7281d8;
`;

const AppBarSearchIcon = styled(SearchIcon)`
  position: absolute;
  margin-left: 10px;
`;

const AppBarSearchInput = styled(InputBase)`
  margin-left: 40px;
  min-width: 210px;
  height: '100%';
  margin-right: 5px;
  color: white;
`;

const AppBarChartIcon = styled(BarChartIcon)`
  width: 35px;
`;

export {
  AppBarBodyActions,
  AppBarSearchIcon,
  AppBarSearchInput,
  AppBarBody,
  AppBarChartIcon,
};
