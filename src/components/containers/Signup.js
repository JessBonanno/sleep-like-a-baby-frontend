import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {
  TextField,
  Checkbox,
  Button,
  CircularProgress,
  useMediaQuery
} from "@material-ui/core";
import {Check, CheckBox} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useForm} from "../customHooks/useForm";
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
  image: {
    width: 350,
    height: 350,
  }
}));


const initialValues = {
  username: '',
  email: '',
  password: '',
}

const Signup = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileSm = useMediaQuery(theme.breakpoints.down('xs'))
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {values, loading, handleChanges, handleSignup} = useForm(initialValues)


  return (
    <Grid container direction={'row'} className={classes.loginContainer}
          justify={'space-evenly'} alignItems={'center'}>
      <Grid item className={classes.getStartedItem}>
        {!mobileSm && (<Grid container direction={'column'} justify={'center'}>
            <Grid item> <Typography variant="h4">Lets Get Started!</Typography>
            </Grid>
            <Grid item> <Typography variant="subtitle2">Let sleep tracker help
              you
              discover your ideal sleep schedule</Typography>
            </Grid>
          </Grid>
        )}
        {mobileSm && (
          <Grid item className={classes.mobileImg}>
            <img src={sleepImage} alt={'person sleeping'}
                 className={classes.image}/>
          </Grid>
        )}
      </Grid>
      <Grid item className={classes.formItem}>
        <Grid container direction={'column'} className={classes.formContainer}>

          <Grid item className={classes.inputItem}>
            <TextField variant={'filled'}
                       id="username-input"
                       label="Username"
                       name="username"
                       type={'text'}
                       value={values.username}
                       placeholder="Username"
                       className={classes.input}
                       onChange={handleChanges}/>
          </Grid>
          <Grid item className={classes.inputItem}>
            <TextField variant={'filled'}
                       id="email-input"
                       label="Email"
                       name="email"
                       type={'text'}
                       value={values.email}
                       placeholder="Email"
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
                       className={classes.input}
                       onChange={handleChanges}/>

          </Grid>
          <Grid container direction={'row'} justify={mobileSm && 'center'}>

            <Grid item className={classes.options}>
              <Typography variant={"caption"} component={Link} to={'/login'}
                          className={classes.optionLink}>Need to
                login?</Typography>
            </Grid>

          </Grid>

          <Grid item className={classes.buttonItem}  align={mobileSm && 'center'}>
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
