import React from 'react';
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import WbIncandescent from '@material-ui/icons/WbIncandescent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Badge from '@material-ui/core/Badge';
import Grade from '@material-ui/icons/Brightness5';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Mood from '@material-ui/icons/Mood';


class NavigationLeft extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

  render() {
       
    const TextTitle ={
        padding:10,
        color:'#757575',
        fontSize:'18px',
        alignText:'center'
    };
    
    

    return (
      <div >
        <Grid container
                direction="column"
                justify="center"
                alignItems="center"
               
        >
            <Grid 
                container xs={12}  direction="column"
                justify="center"
                alignItems="center"
             >
                <img alt="logo" src={require('../imagen.png')} />
                <Box flexDirection="row" 
                     p={4}
                     borderBottom={1}  
                     borderColor="#e0e0e0" 
                     clone
                >
                    <Typography style={TextTitle}>
                        <WbIncandescent /> Smart Filter
                    </Typography>
                </Box>
           </Grid>
           <Box m={2} /> 
            <Box p={3} pt={0} borderRight={1} borderColor="#e0e0e0">
                     <Grid container justify="center" item xs={12}>
                        <Badge 
                            color="secondary"
                            badgeContent={'Sales'}>
                            <Grade style={{fontSize:35}} color='secondary' />
                        </Badge>
                        <Grid item  style={{marginLeft:23}} justify='flex-end'> 
                        <Switch
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            color="secondary"
                            value="checkedA"/>
                        </Grid>
                    </Grid>               
                    <Grid container justify="center" item xs={12}>
                        <Badge 
                            color="secondary"
                            badgeContent={0}>
                            <CalendarToday style={{fontSize:35}} color='secondary' />
                        </Badge>
                        <Grid item  style={{marginLeft:23}} justify='flex-end'> 
                        <Switch
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            color="secondary"
                            value="checkedA"/>
                        </Grid>
                    </Grid>       
                    <Grid container justify="center" item xs={12}>
                        <Badge 
                            color="secondary"
                            badgeContent={0}>
                            <Mood style={{fontSize:35}} color='secondary' />
                        </Badge>
                        <Grid item  style={{marginLeft:23}} justify='flex-end'> 
                        <Switch
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            color="secondary"
                            value="checkedA"/>
                        </Grid>
                    </Grid>  

                    <Box display="flex" 
                        m={1} p={4}
                        xs={12}
                        justifyContent="center"
                        borderBottom={1}  
                        borderColor="#e0e0e0" 
                        clone
                     >
                       <Typography style={TextTitle}>
                         Status
                       </Typography>
                    </Box>

                    <Grid container justify="center" item xs={12}>
                        <SearchIcon style={{color:'#757575',marginTop:20}}/>
                        <TextField id="input-with-icon-grid" label="Search" />
                    </Grid> 
                    
                    <Box m={2} />     
                    <Grid container justify="center" item xs={12}>
                        <Button variant="contained"  color="primary">
                               Delivered
                        </Button>
                        
                    </Grid>
            </Box>
                  
              
        </Grid>
      </div>
          
     
    );
  }
}



export default (NavigationLeft);
