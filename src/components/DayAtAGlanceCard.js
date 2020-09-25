import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.common.mineShaft7p,
    width: 300,
    padding: theme.spacing(1),
  },
  hoursSlept: {
    marginBottom: theme.spacing(1),
  }
}));


const DayAtAGlanceCard = ({day}) => {
  const classes = useStyles();

  return (
    <Grid container direction={'column'} className={classes.cardContainer}>
      <Grid item className={classes.headerWrapper}>
        <Grid container direction={'row'} justify={'space-between'}>
          <Grid item className={classes.date}>
            <Typography variant={"h6"}>{day} 09.01</Typography>
          </Grid>
          <Grid item className={classes.hoursSlept}>
            <Typography variant={"subtitle1"}>11:00pm - 7:00am</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.totalHours}>
          <Typography variant={"subtitle1"}>Total sleep: 8 hr 00
            min</Typography>
        </Grid>
        <Grid item className={classes.quality}>
          <Typography variant={"subtitle1"}>Quality: 3 out of 4</Typography>
        </Grid>

      </Grid>
    </Grid>
  );
}
export default DayAtAGlanceCard;
