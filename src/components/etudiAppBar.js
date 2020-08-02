import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Icon } from '@material-ui/core';
import { Home, Info, Notifications, NotificationsActive } from '@material-ui/icons';
import { ClassesContext } from '../contexts';

function EtudiAppBar(props) {
  
    const classes = useContext(ClassesContext);

    const [notificationCount, setCount] = useState(0);

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Welcome to Etudi!
            </Typography>
            <Button color="inherit" className={classes.barButton} >
              <Home style={{ margin: '0 auto' }} />
              Home
            </Button>
            <Button color="inherit" className={classes.barButton} >
              <Info style={{ margin: '0 auto' }} />
              About
            </Button>
            <Button color="inherit" className={classes.barButton} >
              <Icon className='fa fa-thumbtack' style={{ margin: '0 auto' }} />
              Pin boards
            </Button>
            <Button color="inherit" className={classes.barButton} >
              {notificationCount ?
                <Notifications style={{ margin: '0 auto' }} /> :
                <NotificationsActive style={{ margin: '0 auto' }} />
              }
              Notifications
            </Button>
          </Toolbar>
        </AppBar>
    );
}

export default EtudiAppBar;