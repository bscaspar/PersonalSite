import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import SimpleAppBar from "./simple_appbar";
import HeaderPaper from "./header_paper";
import BodyPaper from "../containers/body_paper";
import icon from "../../assets/icons/favicon-32x32.png";

const styles = {
  root: {
    flexGrow: 1
  },
  footer: {
    float: "right",
    display: "table"
  },
  footerText: {
    display: "table-cell",
    verticalAlign: "middle"
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
      <footer>
        <div className={classes.footer}>
          <Typography className={classes.footerText} variant="caption">
            © Brady Caspar {new Date().getFullYear()}
          </Typography>
          <img src={icon} />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomeGrid);
