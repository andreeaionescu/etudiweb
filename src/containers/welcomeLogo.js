import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import NoteAddOutlined from '@material-ui/icons/NoteAddOutlined';
import ForwardOutlined from '@material-ui/icons/ForwardOutlined';
import { fetchArticlesActionCreator } from './../actions/searchArticle.js';
import SimpleLogo from './../components/simpleLogo.js';
import SearchBar from './../components/searchBar.js';
import ArticlesDashboard from './../containers/articlesDashboard.js';

class Welcome extends React.Component {

    render(){
        const classes = this.props.classes;
        
        if (_.isEmpty(this.props.articles)){
            return (
                <Grid container spacing={4} direction="column" justify="center" alignItems="center" style={{height:'80%'}}>
                    <Grid item>
                        <SimpleLogo classes={classes}/>
                    </Grid>
                    <Grid item>
                        <SearchBar classes={classes} inputClass={classes.searchInput} handleSearchArticle={this.props.handleSearchArticle} searchText={this.props.search}/>
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
        else {
            return <ArticlesDashboard classes={this.props.classes}/>
        }
    }
    
}

const mapStateToProps = (state) => {
    return { search: state.search, articles: state.articles };
}

const mapDispatchToProps = dispatch => ({
    handleSearchArticle: value => dispatch(fetchArticlesActionCreator(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)