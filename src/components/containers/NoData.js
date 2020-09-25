import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

// assests imports
import sleepImage from '../../assets/images/sleep_image.svg'

const useStyles = makeStyles((theme) => ({
  noDataContainer: {
    padding: theme.spacing(9),
  },
  noDataInfoItem: {},
  noDataInfoContainer: {},
  noDataTextContainer: {},
  mainText: {
    paddingBottom: theme.spacing(5),
  },
  sadEmoji: {
    padding: theme.spacing(0, 8),
  },
  subText: {
    fontSize: '1.2rem',
  },
  buttonContainer: {
    paddingTop: theme.spacing(5),
  },
  buttonItem: {},
  button: {
    width: 200,
  },
    noDataImageContainer: {
    paddingTop: theme.spacing(5),
  },
}));

const NoData = () => {
  const classes = useStyles();
  return (
    <Grid container direction={'row'} className={classes.noDataContainer}
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
              <Grid item><Typography variant={'h5'}
                                     className={classes.sadEmoji}>😔</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item><Typography variant={'subtitle2'}
                                 className={classes.subText}>We need more
            entries before we
          </Typography></Grid>
          <Grid item><Typography variant={'subtitle2'}
                                 className={classes.subText}> can make a
            recommendation.</Typography></Grid>
          <Grid item>
            <Grid container direction={'row'}
                  className={classes.buttonContainer} spacing={3}>
              <Grid item className={classes.buttonItem}>
                <Button
                  className={classes.button} variant={'contained'}
                  color={'primary'}>Continue
                  tracking</Button> </Grid>
              <Grid item className={classes.buttonItem}>
                <Button
                  className={classes.button} variant={'outlined'}
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
            <img src={sleepImage} alt={'person sleeping'}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
    ;
}
export default NoData;
