import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Typography, useMediaQuery
} from "@material-ui/core";
import {useForm} from "../customHooks/useForm";

// local components
import StayLoggedIn from "../StayLoggedIn";
import {useTheme} from "@material-ui/styles";
import sleepImage from "../../assets/images/sleep_image.svg";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2),
    }
  },
  getStartedItem: {
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0)
    }
  },
  formContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '96%',
    },
  },
  formItem: {
    paddingTop: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1)
    },
  },
  inputItem: {
    padding: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      padding: theme.spacing(1),
    }
  },
  input: {
    backgroundColor: theme.palette.common.mineShaft16p,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: 350,
    },
  },
  buttonItem: {
    padding: theme.spacing(2),
  },
  button: {
    width: 150,
    height: 45,
    [theme.breakpoints.down('xs')]: {
      width: 340,
    },
  },
  options: {
    padding: theme.spacing(0, 2),
  },
  optionLink: {
    color: theme.palette.primary.main,
    fontSize: '.9rem',
  },
  image: {
    width: 350,
    height: 350,
  }

}));

const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileSm = useMediaQuery(theme.breakpoints.down('xs'))
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {values, loading, handleChanges, handleLogin} = useForm(initialValues)


  return (
    <Grid container direction={'row'} className={classes.loginContainer}
          justify={'space-evenly'} alignItems={'center'}>
      <Grid item className={classes.getStartedItem}>
        {!mobileSm && (<Grid container direction={'column'} justify={'center'}>
          <Grid item> <Typography variant="h4">Welcome Back!</Typography>
          </Grid>
          <Grid item> <Typography variant="subtitle2">You're one step close to
            finding your ideal sleep schedule</Typography>
          </Grid>
        </Grid>)}
        {mobileSm && (
          <Grid item className={classes.mobileImg}>
            <img src={sleepImage} alt={'person sleeping'}
                 className={classes.image}/>
          </Grid>
        )}
      </Grid>
      <Grid item className={classes.formItem}>
        <Grid container direction={'column'} className={classes.formContainer}
              alignItems={mobile && 'center'}>
          <form>
            <Grid item className={classes.inputItem}>
              <TextField variant={'filled'}
                         id="username-input"
                         label="Username"
                         name="username"
                         value={values.username}
                         placeholder="Username"
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
                         className={classes.input}
                         onChange={handleChanges}/>
            </Grid>
            <Grid container direction={'row'} justify={mobileSm && 'center'}>
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
            <Grid item className={classes.buttonItem} align={mobileSm && 'center'}>
              <Button variant={'outlined'}
                      color={'primary'}
                      className={classes.button}
                      type={'submit'}
                      onClick={handleLogin}>
                {
                  loading ? <CircularProgress/> : 'Login'
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
