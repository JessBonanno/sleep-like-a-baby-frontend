import React, {useContext, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import moment from "moment";
import {Button, IconButton} from "@material-ui/core";
import EntryCard from "./EntryCard";
import {SleepLogsContext} from "../../contexts/SleepLogsContext";
import {act} from "@testing-library/react";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
  entryContainer: {
    marginTop: theme.spacing(8),
  },
  entryPageTitleWrapper: {},
  entryPageTitleContainer: {},
  bedtimeWrapper: {},
  wakeTimeWrapper: {},
  titleWrapper: {
    margin: theme.spacing(0, 3)
  },
  deleteWrapper: {
    margin: theme.spacing(0, 3)
  },
  dayMoodWrapper: {},
  deleteIcon: {
    marginBottom: '.2em'
  },
  buttonWrapper: {
    marginTop: theme.spacing(2),
  },
}));


const Entry = () => {
  const classes = useStyles();
  const history = useHistory();
  const {activeDayLog, startNewLog, entryValues, setEntryValues, submitEntryForm} = useContext(SleepLogsContext)
  const [logInfo, setLogInfo] = useState();

  useEffect(() => {
    startNewLog()

  }, [])
  useEffect(() => {
    if (activeDayLog) {
      setEntryValues(activeDayLog)
    }
  }, [activeDayLog])

  const submitEntry = async () => {
    await submitEntryForm(entryValues);
    history.push('/dashboard')

  }

  return (
    <Grid container direction={'column'} className={classes.entryContainer}
          alignItems={'center'}>
      <Grid item className={classes.entryPageTitleWrapper}>
        <Grid container
              className={classes.entryPageTitleContainer}
              direction={'row'}
              justify={'space-between'}
              alignItems={'center'}
        >
          <Grid item className={classes.titleWrapper}>
            <Typography variant={'h6'}>Entry
              for {moment(entryValues && entryValues.date).format('MM-DD-YY')}</Typography>
          </Grid>
          <Grid item className={classes.deleteWrapper}>
            <IconButton>
              <DeleteForeverTwoToneIcon className={classes.deleteIcon}/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.bedtimeWrapper}>
        <EntryCard title={'Bedtime'} score={entryValues.bedtime_score}
                   time={entryValues.bedtime}/>
      </Grid>
      <Grid item className={classes.wakeTimeWrapper}> <EntryCard
        title={'Wake Time'} score={entryValues.wake_score}
        time={entryValues.wake_time}/>
      </Grid>
      <Grid item className={classes.dayMoodWrapper}>
        <EntryCard title={'Day Mood'} score={entryValues.day_score}/>
      </Grid>
      <Grid item className={classes.buttonWrapper}>
        <Button variant={'outlined'} color={'primary'}
                onClick={submitEntry}>Submit</Button>
      </Grid>
    </Grid>
  );
}
export default Entry;
