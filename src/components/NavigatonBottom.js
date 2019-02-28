import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import EmailIcon from '@material-ui/icons/Email';
import SettingIcon from '@material-ui/icons/Settings';
import AccountIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
//import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';//Import Customize
// import 'react-router-modal/css/react-router-modal.css';
// import { ModalContainer, ModalRoute } from 'react-router-modal';
// import { BrowserRouter, Link } from 'react-router-dom';

//Route
import ListShipping from './ListShipping';
import Messages from './Messages';


//Customize Style
const styles =  theme => ({
  root: {
    //width: 800,
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    marginTop: "-10px",
    padding: "5px",
    color: "green",
    "&$selected": {
      color: "red"
    },
  },
  selected: {}, 
  input: {
    marginLeft: 8,
    flex: 1,
   // backgroundColor:'#e0e0e0'
  },
  iconButton: {
    padding: 10,
   // backgroundColor:'#e0e0e0'

  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
 //test
//  function FooModal() {
//   return <div>FOO</div>;
// }
 
// function BarModal() {
//   return <div>BAR</div>;
// }

class NavigationBottom extends React.Component {
  state = {
    value: 0,
    open: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
 
  handleOpenModal = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleWihslist = () => {
    alert('fff');
   // return <RouterLink to='./Messages' />
  };
  
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Fragment >
      
  
              <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
                color='secondary'
              >
                <BottomNavigationAction label="Home"  icon={<HomeIcon />} />
                <BottomNavigationAction onClick={this.handleOpenModal} label="Messages" icon={<EmailIcon />} />
                <BottomNavigationAction onClick={this.handleWihslist} label="Wihslist" icon={<GradeIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingIcon />} />
                <BottomNavigationAction label="My Account"  icon={<AccountIcon />} />
              </BottomNavigation>

             

                  <Grid container justify="flex-end" spacing={24} alignItems="flex-end">
                    <Grid item>
                      <SearchIcon />
                    </Grid>
                    <Grid item>
                      <TextField id="input-with-icon-grid" label="Search" />
                    </Grid>
                  </Grid>
                  
                 <ListShipping />
                 <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="flex-end"
                    >
                    <Fab size="large"  aria-label="Add" style={{backgroundColor:'#e65100',color:'#ffff'}}>
                      <AddIcon />
                    </Fab>
                    
                 </Grid>
                 <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open}
                      onClose={this.handleClose}
                    >
                    <div style={getModalStyle()} className={classes.paper}>
                      <Typography variant="h6" id="modal-title">
                        Messages
                      </Typography>
                       <Messages />
                    </div>
                    
               </Modal>
                 
              
     </Fragment>
    );
  }
}

NavigationBottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBottom);
