import React from "react";
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
  console.log(score)
  return (
    <Grid container direction={'column'} className={classes.cardWrapper}>
      <Grid item className={classes.cardTitleWrapper}>
        <Typography variant={"subtitle1"}>{title}</Typography>
      </Grid>
      {title !== 'Day Mood' && (
        <Grid item className={classes.timeWrapper}>
        <TimePicker time={new Date(`${'2020-09-19T'}${time}`)}/>
      </Grid>)}

      <Grid item className={classes.emojiWrapper}>
        <Grid container className={classes.emojiContainer}
              justify={'space-evenly'}>
          <Grid item className={classes.emojiItem}>
            <SentimentVeryDissatisfiedIcon className={classes.qualityEmoji}
                                           fontSize={'large'}/>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <SentimentDissatisfiedIcon className={classes.qualityEmoji}
                                       fontSize={'large'}/>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <SentimentSatisfiedIcon className={classes.qualityEmoji}
                                    fontSize={'large'}/>
          </Grid>
          <Grid item className={classes.emojiItem}>
            <SentimentVerySatisfiedIcon className={classes.qualityEmoji}
                                        fontSize={'large'}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default EntryCard;
