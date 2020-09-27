import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

// assests imports
import sleepImage from '../../assets/images/sleep_image.svg'
import {UsersContext} from "../../contexts/UsersContext";
import {Link, useHistory} from "react-router-dom";
import trackImage from '../../assets/images/track.png'
import rateImage from '../../assets/images/rate.png'
import recommendImage from '../../assets/images/recommend.png'

const useStyles = makeStyles((theme) => ({
  marketingContainer: {
    padding: theme.spacing(1, 9),
  },
  infoItem: {},
  infoContainer: {},
  textContainer: {},
  mainTextTop: {
    paddingBottom: theme.spacing(2),

  },
  mainTextBottom: {
    paddingBottom: theme.spacing(5),
  },
  sadEmoji: {
    padding: theme.spacing(0, 8),
  },
  subText: {
    fontSize: '1.2rem',
  },
  buttonContainer: {
    paddingTop: theme.spacing(5),
  },
  buttonItem: {},
  button: {
    width: 200,
  },
  imageContainer: {
    paddingTop: theme.spacing(5),
  },
  previewContainer: {
    padding: theme.spacing(5),
  },
  previewItem: {
    border: `1px solid ${theme.palette.common.astral}`,
    borderRadius: 25,
    padding: theme.spacing(2),
  },
  previewImage: {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: 300,
    width: 300,
  },

}));

const MarketingPage = () => {
  const classes = useStyles();
  const history = useHistory()
  const {getUserInfo, userInfo} = useContext(UsersContext)

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Grid container direction={'column'} className={classes.marketingContainer}>
      <Grid item className={classes.infoAndImageWrapper}>
        <Grid container direction={'row'}
              className={classes.infoAndImageContainer}
              justify={'space-evenly'} alignItems={'center'}>
          <Grid item className={classes.infoItem}>
            <Grid container direction={'column'}
                  className={classes.infoContainer}>
              <Grid item>
                <Grid container direction={'column'} justify={'flex-start'}
                      className={classes.textContainer}>
                  <Grid item className={classes.mainTextTop}><Typography
                    variant={'h3'}>Sleep more or less</Typography></Grid>
                  <Grid item className={classes.mainTextBottom}><Typography
                    variant={'h3'}> to feel your
                    best.</Typography></Grid>
                </Grid>
              </Grid>
              <Grid item><Typography variant={'subtitle2'}
                                     className={classes.subText}>Sleep Like A
                Baby
                is a web app that helps
              </Typography></Grid>
              <Grid item><Typography variant={'subtitle2'}
                                     className={classes.subText}> you discover
                your
                ideal sleep schedule</Typography></Grid>
              <Grid item>
                <Grid container direction={'row'}
                      className={classes.buttonContainer} spacing={3}>
                  <Grid item className={classes.buttonItem}>
                    <Button
                      className={classes.button}
                      variant={'contained'}
                      onClick={() => history.push('/signup')}
                      color={'primary'}>Sign up</Button> </Grid>
                  <Grid item className={classes.buttonItem}>
                    <Button
                      className={classes.button}
                      onClick={() => history.push('/signup')}
                      variant={'outlined'}
                      color={'primary'}>Login</Button> </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={'column'}
                  className={classes.imageContainer}>
              <Grid item>
                <img src={sleepImage} alt={'person sleeping'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.previewWrapper}>
        <Grid container direction={'row'} className={classes.previewContainer}
              justify={'space-evenly'}>
          <Grid item className={classes.previewWrapper}>
            <Grid container direction={'column'} alignItems={'center'}
                  spacing={5}
                  className={classes.previewItemContainer}>
              <Grid item className={classes.previewItem}>
                <div className={classes.previewImage} style={{
                  backgroundImage: `url(${trackImage})`
                }}>
                </div>
              </Grid>
              <Grid item>
                <Typography variant={'h5'}>Track your sleep</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.previewWrapper}>
            <Grid container direction={'column'} alignItems={'center'}
                  spacing={5}
                  className={classes.previewItemContainer}>
              <Grid item className={classes.previewItem}>
                <div className={classes.previewImage} style={{
                  backgroundImage: `url(${rateImage})`
                }}>
                </div>
              </Grid>
              <Grid item>
                <Typography variant={'h5'}>Rate your moods</Typography>
              </Grid>
            </Grid>
          </Grid><Grid item className={classes.previewWrapper}>
          <Grid container direction={'column'} alignItems={'center'} spacing={5}
                className={classes.previewItemContainer}>
            <Grid item className={classes.previewItem}>
              <div className={classes.previewImage} style={{
                backgroundImage: `url(${recommendImage})`
              }}>
              </div>
            </Grid>
            <Grid item align={'center'}>
              <Typography variant={'h5'}>Find the sleep that's</Typography>
              <Typography variant={'h5'}>right for you</Typography>

            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
    ;
}
export default MarketingPage;
