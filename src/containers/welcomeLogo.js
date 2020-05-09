import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import NoteAddOutlined from '@material-ui/icons/NoteAddOutlined';
import ForwardOutlined from '@material-ui/icons/ForwardOutlined';
import { connect } from 'react-redux'
import { fetchArticlesActionCreator} from './../actions/searchArticle';
import SimpleLogo from './../components/simpleLogo';
import SearchBar from './../components/searchBar';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: ''};
      }

    render(){
        const classes = this.props.classes;

        return (
            <Grid container spacing={4} xs={12} direction="column" justify="center" alignItems="center" style={{height:'80%'}}>
                <Grid item>
                    <SimpleLogo classes={classes}/>
                </Grid>
                <Grid item>
                    <SearchBar classes={classes} handleSearch={this.props.handleSearchArticle}/>
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
    
}

const mapDispatchToProps = dispatch => ({
    handleSearchArticle: value => dispatch(fetchArticlesActionCreator(value))
})

export default connect(null, mapDispatchToProps)(Welcome)