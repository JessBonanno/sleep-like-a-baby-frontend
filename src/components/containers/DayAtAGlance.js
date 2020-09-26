import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DayAtAGlanceCard from "../DayAtAGlanceCard";
import {SleepLogsContext} from "../../contexts/SleepLogsContext";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  weekHeader: {
    backgroundColor: theme.palette.common.mineShaft7p,
    padding: theme.spacing(1.5),
    width: 300,
  },
  dayCard: {
    margin: theme.spacing(2),
  },
  headerText: {
    textAlign: 'center',
  },
}));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const DayAtAGlance = () => {
  const classes = useStyles();
  const {daysOfWeek} = useContext(SleepLogsContext)


  return (
    <Grid container direction={'column'}
          className={classes.daysAtAGlanceContainer} alignItems={'center'}
          spaciong={3}>
      <Grid item className={classes.weekHeader}>
        <Typography variant={'h6'} className={classes.headerText}>Week
          of: {daysOfWeek[0] && daysOfWeek[0].date}
          </Typography>
      </Grid>

      {daysOfWeek.map(day => {
        return (
          <Grid item className={classes.dayCard} key={day.id}>
            <DayAtAGlanceCard day={day}/>
          </Grid>
        )
      })}
    </Grid>

  );
}
export default DayAtAGlance;
