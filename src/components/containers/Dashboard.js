import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button, useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';


// local components
import HoursSleptChart from "../HoursSleptChart";
import DayAtAGlanceCard from "../DayAtAGlanceCard";
import DayAtAGlance from "./DayAtAGlance";
import DatePicker from "../DatePicker";
import {SleepLogsContext} from "../../contexts/SleepLogsContext";
import moment from "moment";
import {useTheme} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  homepageContainer: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0),
      marginBottom: theme.spacing(10),
    },
  },
  homeMenuWrapper: {
    marginTop: theme.spacing(1),
  },
  mainHeader: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      padding: theme.spacing(2, 0, 0)
    },
  },
  chartWrapper: {
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 350,
    }
  },
  daysAtAGlanceWrapper: {},
  chartHeader: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.common.mineShaft7p,
    padding: theme.spacing(1.5),
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: '.8rem'
    }
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
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0, 4),
    [theme.breakpoints.down('sm')]: {
      width: 350,
    }
  },
}));


const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down('md'));
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {getDaysOfTheWeek, daysOfWeek, startNewLog} = useContext(SleepLogsContext)

  useEffect(() => {
    getDaysOfTheWeek(moment().format('MM-DD-YYYY'))
  }, [])

  return (
    <Grid container direction={'column'}>
      <Grid item className={classes.homeMenuWrapper}>
        <Grid container className={classes.homeMenuContainer} direction={tablet? 'column':'row'}
              justify={'center'} spacing={!mobile && 8} alignItems={'center'}>
          <Grid item className={classes.dateText}>
            <Typography variant={'h5'} className={classes.mainHeader}>Select a week to view</Typography>
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
                <Typography variant={'h6'} className={classes.headerText}>Insights
                  for the Week
                  of: {daysOfWeek[0] && daysOfWeek[0].date}</Typography>
              </Grid>
              <Grid item>
                <HoursSleptChart/>
              </Grid>
              <Grid item className={classes.buttonWrapper}>
                <Button
                  variant={'outlined'}
                  color={'primary'}
                  startIcon={<AddIcon/>}
                  onClick={startNewLog}
                  className={classes.button}
                  component={Link}
                  to={'/create-entry'}
                >Add
                  Entry</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.daysAtAGlanceWrapper}>
            <DayAtAGlance day={daysOfWeek[0]}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
