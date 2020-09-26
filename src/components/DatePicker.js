import React, {useContext, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {SleepLogsContext} from "../contexts/SleepLogsContext";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: theme.palette.primary.main,
    root: {
      color: theme.palette.primary.main,
    }
  },

  cssOutlinedInput: {
    color: theme.palette.primary.main,
  },

  cssFocused: {
    color: theme.palette.primary.main,
    root: {
      color: theme.palette.primary.main,
    }
  },
  picker: {
    backgroundColor: '#232323',
    padding: theme.spacing(1)
  }
}));


const DatePicker = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {getDaysOfTheWeek} = useContext(SleepLogsContext)

  const handleDateChange = date => {
    console.log(date);
    setSelectedDate(date);
  };

  useEffect(() => {
    getDaysOfTheWeek(moment(selectedDate).format('MM-DD-YYYY'));
  },[selectedDate])

  console.log(selectedDate)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'>
        <KeyboardDatePicker
          className={classes.picker}
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            }
          }}
          SvgIconProps={{
            classes: {
              root: classes.adornment,
              focused: classes.adornmentFocused,
            }
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>);
}
export default DatePicker;
