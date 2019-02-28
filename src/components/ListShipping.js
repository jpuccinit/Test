import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import NearMe from '@material-ui/icons/NearMe';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalShipping from '@material-ui/icons/LocalShipping';
import CheckCircle   from '@material-ui/icons/CheckCircle';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//Get Info Json File 
var data = require('../data.json');

//Custom Css
const PaperCustom ={
    borderRadius:20,
    height:85,
    backgroundColor:'#f5f5f5',   
};

const TextCustom ={
    padding:5,
    color:'#757575',
    fontSize:'15px',
    alignText:'center'
};
const TextPrice ={
    padding:5,
    color:'#757575',
    fontSize:'28px',
    alignText:'center'
};

function Todo({ todo,index}){
    return (
        <div style={{ width: '100%' }}>
           <Box display="flex" flexDirection="row" p={1} m={0}>
                <Box p={4}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        >
                    <CheckCircle style={{ color:'#e65100',fontSize:35}}/>
                    </Grid>
                    </Box>
                    <Box display="flex" flexDirection="row" p={1} m={0} style={PaperCustom}>
                        <Box style={{ width: '10%', textAlign: 'center' }} borderRight={1} borderColor="#e0e0e0">
                            <Typography style={TextCustom} variant="subheading" gutterBottom>
                                <Moment format="dddd">
                                    {todo.date}
                                    </Moment> <br /><sup>
                                    <Moment format="Do">
                                    {todo.date}
                                    </Moment></sup>&nbsp;&nbsp;
                                    <Moment format="hh:mm">
                                    {todo.date}
                                    </Moment>< br />
                                    
                                    <Moment format="A">
                                    {todo.date}
                                </Moment> 
                            </Typography>
                        </Box>
                    
                    <Box style={{ width: '5%', textAlign: 'center' }} >
                    <NearMe style={{ color:'#90a4ae',padding:35}}/>
                    </Box>
                    <Box style={{ width: '50%', textAlign: 'center' }} borderRight={1} borderColor="#e0e0e0">
                        <Typography style={TextCustom} gutterBottom>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                item xs={12}
                                >
                                {todo.shipping_from.from}&nbsp;,&nbsp;{todo.shipping_from.state}&nbsp;,
                                    &nbsp;{todo.shipping_from.zip_code}
                                <ExpandMore style={{ color:'#ff9800',fontSize: 30 }}/>
                                {todo.shipping_to.to}&nbsp;,&nbsp;{todo.shipping_to.state}&nbsp;,
                                &nbsp;{todo.shipping_to.zip_code}
                            </Grid>
                        </Typography>
                    </Box>
                <Box style={{ width: '5%', textAlign: 'center' }} >
                <LocalShipping style={{ color:'#90a4ae',padding:25,fontSize:50,marginLeft:25}}/>
                </Box>
                <Box style={{ width: '12%', textAlign: 'left',padding:25,marginLeft:70 }} >
                    <Typography style={TextPrice} gutterBottom>
                    ${todo.price}
                    </Typography>
                </Box>
                
                <Box style={{ width: '20%',padding:15}} >
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="baseline"
                    >
                        <Chip style={{backgroundColor:'#c62828',color:'#ffff'}} label="1"/> 
                        <IconButton >
                        <MoreVertIcon />
                        </IconButton>
                    </Grid>
                
                </Box>
               </Box> 
           </Box>
        </div>
      );
  }


function ListShipping() {
  const [ todos ] = useState(data); 

  return (
    <div>
        {todos.map((todo,index)=>(
                   <Todo key={index} index={index} todo={todo} />
                  )
                )
        }
    </div>
  );
}



export default (ListShipping);
