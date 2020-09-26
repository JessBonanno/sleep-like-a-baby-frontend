import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Typography
} from "@material-ui/core";
import {useForm} from "../customHooks/useForm";

// local components
import StayLoggedIn from "../StayLoggedIn";

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
  password: '',
}

const Login = () => {
  const classes = useStyles();
  const {values, loading, handleChanges, handleLogin} = useForm(initialValues)


  return (
    <Grid container direction={'row'} className={classes.loginContainer}
          justify={'space-evenly'} alignItems={'center'}>
      <Grid item className={classes.getStartedItem}>
        <Grid container direction={'column'} justify={'center'}>
          <Grid item> <Typography variant="h4">Welcome Back!</Typography>
          </Grid>
          <Grid item> <Typography variant="subtitle2">You're one step close to
            finding your ideal sleep schedule</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.formItem}>
        <Grid container direction={'column'} className={classes.formContainer}>
          <form>
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
                         id="password-input"
                         label="Password"
                         placeholder="Password"
                         name={'password'}
                         value={values.password}
                         type={'password'}
                         autoComplete={'current-password'}
                         className={classes.input}
                         onChange={handleChanges}/>
            </Grid>
            <Grid container direction={'row'}>
              <Grid item className={classes.options}>
                <Typography variant={"caption"} component={Link}
                            to={'/reset-password'}
                            className={classes.optionLink}>Forgot
                  password?</Typography>
              </Grid>
              <Grid item className={classes.options}>
                <Typography variant={"caption"} component={Link} to={'/signup'}
                            className={classes.optionLink}>Need to
                  signup?</Typography>
              </Grid>

            </Grid>
            {/* implement this later */}
            {/*<StayLoggedIn/>*/}
            <Grid item className={classes.buttonItem}>
              <Button variant={'outlined'}
                      color={'primary'}
                      className={classes.button}
                      onClick={handleLogin}>
                {
                  loading ? <CircularProgress/> :'Login'
                }
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;
