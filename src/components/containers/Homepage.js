import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';


// local components
import HoursSlept from "../HoursSlept";
import DayAtAGlanceCard from "../DayAtAGlanceCard";
import DayAtAGlance from "./DayAtAGlance";
import DatePicker from "../DatePicker";

const useStyles = makeStyles((theme) => ({
  homepageContainer: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 5),
  },
  homeMenuWrapper: {
    marginTop: theme.spacing(1),
  },
  chartWrapper: {
    width: 400,
  },
  daysAtAGlanceWrapper: {},
  chartHeader: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.common.mineShaft7p,
    padding: theme.spacing(1.5),
    width: 500,
  },
  headerText: {
    textAlign: 'center',
  },
  datePicker: {
    marginBottom: theme.spacing(1),
  },
  buttonWrapper: {
    marginTop: theme.spacing(4),
  },
  button: {
    width: 150,
  },
}));


const Homepage = () => {
  const classes = useStyles();

  return (
    <Grid container direction={'column'}>
      <Grid item className={classes.homeMenuWrapper}>
        <Grid container className={classes.homeMenuContainer}
              justify={'center'} spacing={8} alignItems={'center'}>
          <Grid item className={classes.dateText}>
            <Typography variant={'h5'}>Select a week to view</Typography>
          </Grid>
          <Grid item className={classes.datePicker}>
            <DatePicker/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.homeBodyWrapper}>
        <Grid container dir={'row'} className={classes.homepageContainer}
              justify={'space-evenly'}>
          <Grid item className={classes.chartWrapper}>
            <Grid container direction={'column'}
                  className={classes.chartContainer} alignItems={'center'}>
              <Grid item className={classes.chartHeader}>
                <Typography variant={'h6'} className={classes.headerText}>Insights for the Week
                  of: 09.01.2020 - 09.07.2020</Typography>
              </Grid>
              <Grid item>
                <HoursSlept/>
              </Grid>
              <Grid item className={classes.buttonWrapper}>
              <Button variant={'outlined'} color={'primary'} startIcon={<AddIcon/>} className={classes.button}>Add Entry</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.daysAtAGlanceWrapper}>
            <DayAtAGlance/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Homepage;
