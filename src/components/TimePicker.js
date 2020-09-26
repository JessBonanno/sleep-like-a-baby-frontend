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


const DatePicker = ({title, time}) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {entryValues, setEntryValues} = useContext(SleepLogsContext)
  console.log({title})
  useEffect(() => {
    if (time) {
      setSelectedDate(time)
      }
  }, [time])

  const handleDateChange = date => {
    // console.log(date);
    console.log(moment(date).format('hh:mm:ss'))
    if (title.includes('Bedtime')) {
      setEntryValues({
        ...entryValues,
        bedtime: moment(date).format('hh:mm:ss'),
      })
    } else {
            setEntryValues({
        ...entryValues,
        wake_time: moment(date).format('hh:mm:ss'),
      })

    }
    setSelectedDate(date);
  };

  console.log(entryValues)

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'>
        <KeyboardTimePicker
          id={`${title}`}
          margin="normal"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
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
