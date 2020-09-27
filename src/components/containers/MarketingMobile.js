import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import trackImage from "../../assets/images/track.png";
import rateImage from "../../assets/images/rate.png";
import recommendImage from "../../assets/images/recommend.png";


const useStyles = makeStyles((theme) => ({
  imageContainer: {},
  previewWrapper: {
        marginBottom: theme.spacing(5),

  },
  previewContainer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(10),
  },
  previewItem: {
    border: `1px solid ${theme.palette.common.astral}`,
    borderRadius: 25,
  },
  previewImage: {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: 300,
    width: 300,
  },
  previewText: {
    paddingTop: theme.spacing(3)
  }
}));


const MarketingMobile = () => {
  const classes = useStyles();

  return (
    <Grid container direction={'column'}
          // alignItems={'center'}
          className={classes.previewContainer}
    >
      <Grid item className={classes.previewWrapper}>
        <Grid container direction={'column'} alignItems={'center'}
              className={classes.previewItemContainer}>
          <Grid item className={classes.previewItem}>
            <div className={classes.previewImage} style={{
              backgroundImage: `url(${trackImage})`
            }}>
            </div>
          </Grid>
          <Grid item>
            <Typography className={classes.previewText} variant={'h5'}>Track
              your sleep</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.previewWrapper}>
        <Grid container direction={'column'} alignItems={'center'}
              className={classes.previewItemContainer}>
          <Grid item className={classes.previewItem}>
            <div className={classes.previewImage} style={{
              backgroundImage: `url(${rateImage})`
            }}>
            </div>
          </Grid>
          <Grid item>
            <Typography className={classes.previewText} variant={'h5'}>Rate your
              moods</Typography>
          </Grid>
        </Grid>
      </Grid><Grid item className={classes.previewWrapper}>
      <Grid container direction={'column'} alignItems={'center'}
            className={classes.previewItemContainer}>
        <Grid item className={classes.previewItem}>
          <div className={classes.previewImage} style={{
            backgroundImage: `url(${recommendImage})`
          }}>
          </div>
        </Grid>
        <Grid item align={'center'}>
          <Typography className={classes.previewText} variant={'h5'}>Find the
            sleep that's</Typography>
          <Typography variant={'h5'}>right for you</Typography>

        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}
export default MarketingMobile;
