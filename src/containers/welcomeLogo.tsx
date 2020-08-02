import React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import NoteAddOutlined from '@material-ui/icons/NoteAddOutlined';
import ForwardOutlined from '@material-ui/icons/ForwardOutlined';
import { fetchArticlesActionCreator } from '../actions/searchArticle';
import SimpleLogo from '../components/simpleLogo.js';
import SearchBar from '../components/searchBar'; // @ts-ignore
import ArticlesDashboard from './articlesDashboard.js';

interface WelcomeProps {    //TODO
    classes: { [key: string]: string }
    articles: any
    handleSearchArticle: (article: any) => Promise<void>
    search: string
}

function Welcome(props: WelcomeProps) {

    const classes = props.classes;
    
    if (_.isEmpty(props.articles)){
        return (
            <Grid container spacing={4} direction="column" justify="center" alignItems="center" style={{height:'80%'}}>
                <Grid item>
                    <SimpleLogo classes={classes}/>
                </Grid>
                <Grid item>
                    <SearchBar classes={classes} inputClass={classes.searchInput} handleSearchArticle={props.handleSearchArticle} searchText={props.search}/>
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
        return <ArticlesDashboard classes={props.classes}/>
    }
}

const mapStateToProps = (state: { search: any, articles: any[] }) => {  //TODO
    return { search: state.search, articles: state.articles };
};

const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({ //TODO
    handleSearchArticle: (value: any) => dispatch(fetchArticlesActionCreator(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)