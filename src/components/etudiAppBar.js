import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function EtudiAppBar(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickLoginOpen = () => {
      setOpen(true);
    };

    const handleLoginClose = () => {
      setOpen(false);
    };

    const classes = props.classes

    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Welcome to Etudi!
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button variant="contained" color="secondary" onClick={handleClickLoginOpen}>Login</Button>
          </Toolbar>
        </AppBar>
    )
}

export default EtudiAppBar;