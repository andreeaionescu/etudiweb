import React from 'react';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import EtudiAppBar from './components/etudiAppBar';
import Welcome from './containers/welcomeLogo';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ceeef0',
      main: '#a9d2d5',
      dark: '#808d8e',
      contrastText: '#000',
    },
    secondary: {
      light: '#a3a5c3',
      main: '#947eb0',
      dark: '#766c7f',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  welcomeIcon: {
    color: theme.palette.common.black,
    fontSize: 50, 
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  search: {
    position: 'relative',
    border: '2px',
    borderStyle: 'solid',
    borderColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: theme.spacing(1.5),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(0.5)
  },
  searchInput: {
    width: '50ch',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  spaciousSearchInput: {
    width: '120ch',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div style={{flexGrow:1, height:'100%'}}>
       <ThemeProvider theme={theme}>
          <EtudiAppBar classes={classes}/>     
          <Welcome classes={classes}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
