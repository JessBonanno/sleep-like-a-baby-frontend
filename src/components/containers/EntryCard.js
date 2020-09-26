import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import SentimentVeryDissatisfiedIcon
  from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon
  from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVerySatisfiedIcon
  from "@material-ui/icons/SentimentVerySatisfied";
import moment from "moment";
import TimePicker from '../TimePicker'
import {IconButton} from "@material-ui/core";
import {SleepLogsContext} from "../../contexts/SleepLogsContext";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    backgroundColor: theme.palette.common.mineShaft9p,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    minWidth: 280,
  },
  emojiItem: {
    margin: theme.spacing(1)
  },
  selectedEmoji: {
    backgroundColor: 'white',
    borderRadius: '50px'
  },
}));


const EntryCard = ({title, time, score}) => {
  const classes = useStyles();
  const {entryValues, setEntryValues} = useContext(SleepLogsContext)

const setScores = (id, score) => {
    if (id.includes('Bedtime')) {
      setEntryValues({
        ...entryValues,
        bedtime_score: score
      })
    } else if (id.includes('Wake Time')) {
      setEntryValues({
        ...entryValues,
        wake_score: score
      })
    } else if (id.includes('Day Mood')) {
      setEntryValues({
        ...entryValues,
        day_score: score
      })
    }
  }

  return (
    <Grid container direction={'column'} className={classes.cardWrapper}>
      <Grid item className={classes.cardTitleWrapper}>
        <Typography variant={"subtitle1"}>{title}</Typography>
      </Grid>
      {title !== 'Day Mood' && (
        <Grid item className={classes.timeWrapper}>
          <TimePicker title={title} time={new Date(`${'2020-09-19T'}${time}`)}/>
        </Grid>)}

      <Grid item className={classes.emojiWrapper}>
        <Grid container className={classes.emojiContainer}
              justify={'space-evenly'}>
          <Grid item className={classes.emojiItem}>
            <IconButton id={`${title}-1`} onClick={() => setScores(`${title}-1`, 1)}>
              <SentimentVeryDissatisfiedIcon
                className={[classes.qualityEmoji, score === 1 && classes.selectedEmoji]}
                fontSize={'large'}/>
            </IconButton>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <IconButton id={`${title}-2`} onClick={() => setScores(`${title}-2`, 2)}>
              <SentimentDissatisfiedIcon
                className={[classes.qualityEmoji, score === 2 && classes.selectedEmoji]}
                fontSize={'large'}/>
            </IconButton>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <IconButton  id={`${title}-3`} onClick={() => setScores(`${title}-3`, 3)}>
              <SentimentSatisfiedIcon
                className={[classes.qualityEmoji, score === 3 && classes.selectedEmoji]}
                fontSize={'large'}/>
            </IconButton>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <IconButton id={`${title}-4`} onClick={() => setScores(`${title}-4`, 4)}>

              <SentimentVerySatisfiedIcon
                className={[classes.qualityEmoji, score === 4 && classes.selectedEmoji]}
                fontSize={'large'}/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default EntryCard;
