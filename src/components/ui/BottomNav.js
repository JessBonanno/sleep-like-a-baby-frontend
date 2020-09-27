import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BarChartIcon from '@material-ui/icons/BarChart';
import HotelIcon from '@material-ui/icons/Hotel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import theme from './Theme'
import {useHistory} from "react-router";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.common.mineShaft7p,
  },
  action: {
    color: 'white',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.action} onClick={()=> history.push('/dashboard') } label="Dashboard"  icon={<BarChartIcon />} />
      <BottomNavigationAction className={classes.action} onClick={()=> history.push('/recommendation') } label="My Sleep" icon={<HotelIcon />} />
      <BottomNavigationAction className={classes.action} onClick={()=> history.push('/create-entry') }  label="Add Entry" icon={<AddCircleOutlineIcon />} />
      <BottomNavigationAction className={classes.action} onClick={()=> history.push('/login') } label="Login"  icon={<EmojiPeopleIcon />} />

    </BottomNavigation>
  );
}
