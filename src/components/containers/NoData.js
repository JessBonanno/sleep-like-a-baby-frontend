import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button, useMediaQuery} from "@material-ui/core";

// assests imports
import sleepImage from '../../assets/images/sleep_image.svg'
import {Link, useHistory} from "react-router-dom";
import {useTheme} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  noDataContainer: {
    padding: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  noDataInfoItem: {},
  noDataInfoContainer: {},
  noDataTextContainer: {},
  mainText: {
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
  },
  sadEmoji: {
    padding: theme.spacing(0, 8),
  },
  subText: {
    fontSize: '1.2rem',
      [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
  },
  buttonContainer: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    },
  },
  buttonItem: {},
  button: {
    width: 200,
    [theme.breakpoints.down('sm')]: {
      width: 350,
    },
  },
  noDataImageContainer: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0),
    },
  },
  image: {
    width: 350,
    height: 350,
  },
}));

const NoData = () => {
  const classes = useStyles();
  const theme = useTheme()
  const mobileSm = useMediaQuery(theme.breakpoints.down('xs'))
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const history = useHistory();
  return (
    <Grid container direction={mobile ? 'column-reverse' : 'row'}
          justify={'space-evenly'} alignItems={'center'}>
      <Grid item className={classes.noDataInfoItem}>
        <Grid container direction={'column'}
              className={classes.noDataInfoContainer}>
          <Grid item>
            <Grid container direction={'row'} justify={'space-between'}
                  className={classes.noDataTextContainer}>
              <Grid item className={classes.mainText}><Typography
                variant={'h5'}>Uh
                oh... </Typography></Grid>
              <Grid item ><Typography variant={'h5'}
                                     className={classes.sadEmoji}>😔</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.subtitle}><Typography variant={'subtitle2'}
                                 className={classes.subText}>We need more
            entries before we
          </Typography></Grid>
          <Grid item><Typography variant={'subtitle2'}
                                 className={classes.subText}> can make a
            recommendation.</Typography></Grid>
          <Grid item>
            <Grid container direction={mobile ? 'column' : 'row'}
                  alignItems={mobile && 'center'}
                  className={classes.buttonContainer} spacing={3}>
              <Grid item className={classes.buttonItem}>
                <Button
                  className={classes.button}
                  variant={'contained'}
                  onClick={() => history.push('/dashboard')}
                  color={'primary'}>Continue
                  tracking</Button> </Grid>
              <Grid item className={classes.buttonItem}>
                <Button
                  className={classes.button}
                  onClick={() => history.push('/')}

                  variant={'outlined'}
                  color={'primary'}>Learn
                  More</Button> </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={'column'}
              className={classes.noDataImageContainer}>
          <Grid item>
            <img src={sleepImage} alt={'person sleeping'}
                 className={classes.image}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
    ;
}
export default NoData;
