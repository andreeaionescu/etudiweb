import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function EtudiBar(props) {

    const classes = props.classes

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Welcome to Etudi!
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button variant="contained" color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
    )
}

export default EtudiBar;