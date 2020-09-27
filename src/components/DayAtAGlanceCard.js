import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";
import SentimentVeryDissatisfiedIcon
  from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon
  from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfiedIcon
  from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.common.mineShaft7p,
    width: 300,
    padding: theme.spacing(1),
  },
  date: {
    marginBottom: theme.spacing(1),
  },
  hoursSlept: {},
  qualityEmoji: {
    fontSize: '1.5rem',
  },
  feelings: {
    padding: theme.spacing(0, 8, 0, 2)
  }
}));


const DayAtAGlanceCard = ({day}) => {
  const classes = useStyles();

  const bedtime = new Date(`2020-09-18T${day.bedtime}`).getTime()
  const formattedBedTime = moment(bedtime).format('hh:mm:A')
  const wakeTime = new Date(`2020-09-18T${day.wake_time}`).getTime()
  const formattedWakeTime = moment(wakeTime).format('hh:mm:A')

  const moods = {
    1: '😖',
    2: '😐',
    3: '😀',
    4: '😁',
  }

  return (
    <Grid container direction={'column'} className={classes.cardContainer}>
      <Grid item className={classes.headerWrapper}>

        <Grid item className={classes.date}>
          <Typography variant={"h6"}>{day.day}</Typography>
        </Grid>
        <Grid item className={classes.hoursSlept}>
          <Typography
            variant={"subtitle1"}>Slept: {day.total_hours_slept} hrs {formattedBedTime} - {formattedWakeTime}</Typography>
        </Grid>
        <Grid container direction={'row'} justify={'space-between'}
              alignItems={'flex-end'} className={classes.feelings}>
          <Grid item className={classes.quality}>
            <Typography variant={"subtitle1"}>
              Woke up feeling:
            </Typography>
          </Grid>
          <Grid item className={classes.qualityEmoji}>
            {moods[day.wake_score]}
          </Grid>
        </Grid><Grid container direction={'row'} justify={'space-between'}
                     alignItems={'flex-end'} className={classes.feelings}>
        <Grid item className={classes.quality}>
          <Typography variant={"subtitle1"}>
            Through the day felt:
          </Typography>
        </Grid>
        <Grid item className={classes.qualityEmoji} >
          {moods[day.day_score]}
        </Grid>
      </Grid><Grid container direction={'row'} justify={'space-between'}
                   alignItems={'flex-end'} className={classes.feelings}>
        <Grid item className={classes.quality}>
          <Typography variant={"subtitle1"}>
            Went to sleep feeling:
          </Typography>
        </Grid>
        <Grid item className={classes.qualityEmoji}>
          {moods[day.bedtime_score]}
        </Grid>
      </Grid> <Grid container direction={'row'} justify={'space-between'}
                    alignItems={'flex-end'} className={classes.feelings}>
        <Grid item className={classes.quality}>
          <Typography variant={"subtitle1"}>
            Overall Quality:
          </Typography>
        </Grid>
        <Grid item className={classes.qualityEmoji}>
          {moods[day.average_quality]}
        </Grid>
      </Grid>

      </Grid>
    </Grid>
  );
}
export default DayAtAGlanceCard;
