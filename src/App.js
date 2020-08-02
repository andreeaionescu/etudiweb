import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import EtudiAppBar from 'components/etudiAppBar';
import Welcome from 'containers/welcomeLogo.tsx';
import LoginForm from 'containers/loginForm';
import PinBoard from './containers/pinBoard';
import { ClassesContext } from './contexts';

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
    },
    subtitle1: {
      fontWeight: 600
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

  /* Pin Section */
  option: {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center'
  },
  optionLabel: {
    fontWeight: 300,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    width: '100%',
    height: '3px'
  },
  board: {
    padding: '10px',
    display: 'grid',
    columnGap: '5vw',
    rowGap: '10px',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  pin: {
    border: '1px solid #000000',
    borderRadius: '20px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  pinTitle: {
    padding: '5px 10px',
    fontWeight: 600,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    textAlign: 'center',
    borderRadius: '20px 20px 0px 0px'
  },
  list: {
    margin: '0.5em 2px'
  },

  /* Articles section */
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
         <ClassesContext.Provider value={classes}>            
            <EtudiAppBar classes={classes}/>
            <PinBoard />  
            <Welcome classes={classes}/>
            {/* <LoginForm classes={classes}/> */}
         </ClassesContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
