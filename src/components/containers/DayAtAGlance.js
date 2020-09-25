import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DayAtAGlanceCard from "../DayAtAGlanceCard";

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

  return (
    <Grid container direction={'column'}
          className={classes.daysAtAGlanceContainer} alignItems={'center'} spaciong={3}>
      <Grid item className={classes.weekHeader}>
        <Typography variant={'h6'} className={classes.headerText}>Week of: 09.01.2020 - 09.07.2020</Typography>
      </Grid>

      {days.map(day => {
        return (
          <Grid item className={classes.dayCard}>
            <DayAtAGlanceCard day={day}/>
          </Grid>
        )
      })}
    </Grid>

  );
}
export default DayAtAGlance;
