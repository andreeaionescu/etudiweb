import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function SimpleLogo(props){

    const classes = props.classes

    return (
        <Grid container spacing={2} direction="column" justify="center" alignItems="center">
            <Grid item className={classes.image}>
                <img className={classes.img} alt="etudi-logo" src="./../public/logo192.png"/>
            </Grid>
            <Grid item>
                <Typography variant="h5" gutterBottom>The collaboration network</Typography>
            </Grid>
        </Grid>
    )
}

export default SimpleLogo;