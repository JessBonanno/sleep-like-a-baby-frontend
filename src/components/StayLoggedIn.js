import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Checkbox} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    checkboxItem: {
    paddingLeft: theme.spacing(.5),
  },
}));


const StayLoggedIn = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    // can implement this later if wanted
    <Grid item className={classes.checkboxItem}>
      <Checkbox
        className={classes.checkbox}
        defaultChecked
        size="small"
        color={'primary'}
        inputProps={{'aria-label': 'checkbox with small size'}}
      />
      <Typography variant={'caption'}> Keep me logged in</Typography>
    </Grid>
  );
}
export default StayLoggedIn;
