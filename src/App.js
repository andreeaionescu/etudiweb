import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import EtudiAppBar from 'components/etudiAppBar';
import Welcome from 'containers/welcomeLogo.tsx';
import LoginForm from 'containers/loginForm';

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
    fontFamily: 'Montserrat, Arial, Roboto',
    h4: {
      "fontSize": 24,
      "fontWeight": 600
    },
    h6: {
      "fontWeight": 800
    },
    body1: {
      "fontSize": 14
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
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
    border: '2px',
    borderStyle: 'solid',
    borderColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1.5)
  },
  searchIconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(0.5)
  },
  searchInput: {
    width: '50ch',
    marginLeft: theme.spacing(1),
  },
  spaciousSearchInput: {
    marginLeft: theme.spacing(1),
    width: '120ch',
    [theme.breakpoints.up('xs')]: {
      width: '20ch'
    },
    [theme.breakpoints.up('sm')]: {
      width: '60ch'
    },
    [theme.breakpoints.up('md')]: {
      width: '80ch'
    },
    [theme.breakpoints.up('lg')]: {
      width: '120ch'
    }
  },
  expandedArticle: {
    padding: theme.spacing(2),
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div style={{flexGrow:1, height:'100%'}}>
       <ThemeProvider theme={theme}>
          <EtudiAppBar classes={classes}/>     
          <Welcome classes={classes}/>
          {/* <LoginForm classes={classes}/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
