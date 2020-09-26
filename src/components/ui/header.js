import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import {UsersContext} from "../../contexts/UsersContext";
import {SleepLogsContext} from "../../contexts/SleepLogsContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.common.mineShaft7p,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  link: {
    ...theme.typography.navLink,
    padding: theme.spacing(2),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const {logout, loggedIn} = useContext(UsersContext)
  const theme = useTheme();
  const XSDown = useMediaQuery(theme.breakpoints.down('xs'))
  const SMDown = useMediaQuery(theme.breakpoints.down('sm'))
  const MDDown = useMediaQuery(theme.breakpoints.down('md'))
  const LGDown = useMediaQuery(theme.breakpoints.down('lg'))
  const {userInfo} = useContext(UsersContext)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {SMDown && (
            <IconButton edge="start" className={classes.menuButton}
                        color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
          )}
          <Typography component={Link} to={'/'} variant="h5"
                      className={classes.title}>
            Sleep Like A Baby
          </Typography>
          <Typography component={Link} to={loggedIn
            ?
            '/home'
            :
            '/login'}
                      className={classes.link}>
            Sleep Stats
          </Typography>
          <Typography component={Link}
                      to={loggedIn
                        ?
                        userInfo && userInfo.recommended_hours !== null
                          ?
                          '/recommendation'
                          : '/no-data'
                        :
                        '/login'}
                      className={classes.link}>
            Recommendation
          </Typography>
          {loggedIn ?
            <Typography component={Link} to={'/login'} onClick={logout}
                        className={classes.link}>
              Logout
            </Typography> :
            <Typography component={Link} to={'/login'}
                        className={classes.link}>
              Login
            </Typography>}

        </Toolbar>
      </AppBar>
    </div>
  );
}
