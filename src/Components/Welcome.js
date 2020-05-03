import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import NoteAdd from '@material-ui/icons/NoteAddOutlined';
import Forward from '@material-ui/icons/ForwardOutlined';

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
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            </Grid>
            <Grid item>
                <Grid container spacing={10} justify="center" alignItems="center">
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><SearchIcon style={{ fontSize: 50 }}/></IconButton>
                            <Typography>Search</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><NoteAdd style={{ fontSize: 50 }}/></IconButton>
                            <Typography>Pin</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton size="medium"><Forward style={{ fontSize: 50 }}/></IconButton>
                            <Typography>Share</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Welcome;