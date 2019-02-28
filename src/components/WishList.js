import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function WishList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="ssimply dummy text of the printing and typesetting industry. Lorem Ipsum" 
        secondary="Jan 9, 2019" />
      </ListItem>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Ws simply dummy text of the printing and typesetting industry. Lorem Ipsum" 
        secondary="Jan 7, 2019" />
      </ListItem>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="Vs simply dummy text of the printing and typesetting industry. Lorem Ipsum" 
        secondary="July 20, 2019" />
      </ListItem>
    </List>
  );
}

WishList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WishList);