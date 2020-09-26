import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {TextField, Checkbox, Button, CircularProgress} from "@material-ui/core";
import {Check, CheckBox} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useForm} from "../customHooks/useForm";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: theme.spacing(9),
  },
  getStartedItem: {
    padding: theme.spacing(8, 0),
  },
  formContainer: {
    width: '100%',
  },
  formItem: {
    paddingTop: theme.spacing(9),
  },
  inputItem: {
    padding: theme.spacing(2),
    width: '100%',
  },
  input: {
    backgroundColor: theme.palette.common.mineShaft16p,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 400,
  },
  buttonItem: {
    padding: theme.spacing(2),
  },
  button: {
    width: 150,
    height: 45,
  },
  checkboxItem: {
    paddingLeft: theme.spacing(.5),
  },
  options: {
    padding: theme.spacing(0, 2),
  },
  optionLink: {
    color: theme.palette.primary.main,
    fontSize: '.9rem',
  },
}));


const initialValues = {
  username: '',
  email: '',
  password: '',
}

const Signup = () => {
  const classes = useStyles();
  const {values, loading, handleChanges, handleSignup} = useForm(initialValues)


  return (
    <Grid container direction={'row'} className={classes.loginContainer}
          justify={'space-evenly'} alignItems={'center'}>
      <Grid item className={classes.getStartedItem}>
        <Grid container direction={'column'} justify={'center'}>
          <Grid item> <Typography variant="h4">Lets Get Started!</Typography>
          </Grid>
          <Grid item> <Typography variant="subtitle2">Let sleep tracker help you
            discover your ideal sleep schedule</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.formItem}>
        <Grid container direction={'column'} className={classes.formContainer}>

          <Grid item className={classes.inputItem}>
            <TextField variant={'filled'}
                       id="username-input"
                       label="Username"
                       name="username"
                       value={values.username}
                       placeholder="Username"
                       autoComplete={'username'}
                       className={classes.input}
                       onChange={handleChanges}/>
          </Grid>
          <Grid item className={classes.inputItem}>
            <TextField variant={'filled'}
                       id="email-input"
                       label="Email"
                       name="email"
                       value={values.email}
                       placeholder="Email"
                       autoComplete={'email'}
                       className={classes.input}
                       onChange={handleChanges}/>

          </Grid>
          <Grid item className={classes.inputItem}>
            <TextField variant={'filled'}
                       id="password-input"
                       label="Password"
                       name={'password'}
                       value={values.password}
                       placeholder="Password"
                       type={'password'}
                       autoComplete={'current-password'}
                       className={classes.input}
                       onChange={handleChanges}/>

          </Grid>
          <Grid container direction={'row'}>

            <Grid item className={classes.options}>
              <Typography variant={"caption"} component={Link} to={'/login'}
                          className={classes.optionLink}>Need to
                login?</Typography>
            </Grid>

          </Grid>

          <Grid item className={classes.buttonItem}>
            <Button variant={'outlined'}
                    color={'primary'}
                    className={classes.button}
                    type={'submit'}
                    onClick={handleSignup}>
              {
                loading ? <CircularProgress/> : 'Sign Up'
              }
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Signup;
