import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import PictureCarousel from "./picture_carousel";
import { BODY_TEXT } from "../../assets/text_content";

const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  }
});

const AboutMe = props => {
  const { classes } = props;

  return (
    <Grid className={classes.container} spacing={8} container>
      <Grid item xs={8}>
        <Typography variant="body1">
          {BODY_TEXT.p1}
          <br />
          <br />
          {BODY_TEXT.p2}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <PictureCarousel />
        <Typography variant="caption">
          A few pics from my time off (and practice with a slideshow)
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AboutMe);
