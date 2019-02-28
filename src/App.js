import React,{ useEffect, Fragment } from 'react';
import MainPage from './components/MainPage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


function App(){
 
 //Change Color Background body
 useEffect(() => {
  document.body.style.backgroundColor = "#eceff1";
 });
 const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#607d8b'
      },
      primary: {
        main: '#607d8b'
    },
    
    },
});
 

  return (
    <div >

      <Fragment>
        <MuiThemeProvider theme={theme}>
          <MainPage />
        </MuiThemeProvider> 
      </Fragment>
       
    </div>

  )

}
export default App;