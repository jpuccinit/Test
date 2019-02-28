import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Import Component seccion
import NavigationBottom from './NavigationBottom'
import NavigationLeft from './NavigationLeft'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 'auto'
     //backgroundColor:'#efebe9'
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} style={{marginTop: "2.5rem",marginLeft: "1.5rem",marginRight: "1.5rem" }}>
      <Grid container className={classes.root} >
        <Grid container
              item xs={3}
        >
           <NavigationLeft/>
        </Grid>
        <Grid item xs={9}>
           <NavigationBottom />
        </Grid>
      </Grid>  
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
