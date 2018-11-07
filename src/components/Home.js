import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import SimpleAppBar from "./simple_appbar";
import HeaderPaper from "./header_paper";
import BodyPaper from "../containers/body_paper";

const styles = {
  root: {
    flexGrow: 1
  }
};

const HomeGrid = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <SimpleAppBar />
      <main>
        <Grid container className={classes.root}>
          <Grid item sm={1} />
          <Grid item sm={10}>
            <HeaderPaper />
            <BodyPaper />
          </Grid>
          <Grid item sm={1} />
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomeGrid);
