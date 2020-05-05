import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import NoteAddOutlined from '@material-ui/icons/NoteAddOutlined';
import ForwardOutlined from '@material-ui/icons/ForwardOutlined';
import SearchBar from './../components/searchBar.js';

function Welcome(props) {

    const classes = props.classes;

    return (
        <Grid container spacing={4} xs={12} direction="column" justify="center" alignItems="center" style={{height:'80%'}}>
            <Grid item>
                <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                    <Grid item className={classes.image}>
                        <img className={classes.img} alt="complex" src="../../public/logo192.png" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>The collaboration network</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <SearchBar classes={classes}/>
            </Grid>
            <Grid item>
                <Grid container spacing={10} justify="center" alignItems="center">
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><Search className={classes.welcomeIcon}/></IconButton>
                            <Typography>Search</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><NoteAddOutlined className={classes.welcomeIcon}/></IconButton>
                            <Typography>Pin</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><ForwardOutlined className={classes.welcomeIcon}/></IconButton>
                            <Typography>Share</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Welcome;