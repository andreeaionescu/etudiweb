import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Box, Paper, Container, Divider, List} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import SearchBar from 'components/searchBar';
import { ArticleListItem, ArticleFull, ArticleBasis } from 'components/article';
import { fetchArticlesActionCreator, fetchFullTextByIdActionCreator } from 'actions/searchArticle';

class ArticlesDashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {expanded: '', page: 1}
        this.expandArticle = this.expandArticle.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    async expandArticle(id){
        await this.props.handleFullTextById(id)
        this.setState(prevState  => ({expanded: id, page: prevState.page}))
    }

    handlePageChange(event, value){
        this.setState(prevState  => ({expanded: prevState.expanded, page: value}))
    };

    handleSearch(text){
        this.setState({expanded: '', page: 1})
        this.props.handleSearchArticle(text)
    }

    render(){
        const classes = this.props.classes;
        const itemsPerPage = 25;
        const noOfPages = Math.ceil(Object.keys(this.props.articles).length / itemsPerPage)
        const slicedArticleList = Object.keys(this.props.articles).slice((this.state.page - 1) * itemsPerPage, this.state.page * itemsPerPage)

        return (
            <Container maxWidth="lg" style={{paddingTop: '2ch'}}>
                <Paper elevation={3}>
                    <Grid container direction="column" wrap="nowrap" justify="space-between" alignItems="center">
                        <Grid item>
                            <SearchBar classes={classes} inputClass={`${classes.searchInput} ${classes.spaciousSearchInput}`} handleSearchArticle={this.handleSearch} searchText={this.props.search}/>
                        </Grid>
                            {this.state.expanded == '' ? 
                                <Grid item>
                                    <List>
                                        {slicedArticleList.map(key => <ArticleListItem key={key} id={key} article={this.props.articles[key]} expandArticle={this.expandArticle} searchText={this.props.search}/>)}
                                    </List>
                                    <Divider />
                                    <Box component="span">
                                        <Pagination
                                            count={noOfPages}
                                            page={this.state.page}
                                            onChange={this.handlePageChange}
                                            defaultPage={1}
                                            color="primary"
                                            size="large"
                                            showFirstButton
                                            showLastButton
                                            classes={{ ul: classes.paginator }}
                                        />
                                        </Box>
                                </Grid>
                                :
                                <Grid item>
                                    { this.props.articles[this.state.expanded].full_text || !_.isEmpty(this.props.articles[this.state.expanded].ELocationID)
                                        ? <ArticleFull classes={classes} article={this.props.articles[this.state.expanded]}/>
                                        : <ArticleBasis classes={classes} article={this.props.articles[this.state.expanded]}/>
                                    }
                                </Grid>
                            }
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { search: state.search, articles: state.articles };
}

const mapDispatchToProps = dispatch => ({
    handleSearchArticle: value => dispatch(fetchArticlesActionCreator(value)),
    handleFullTextById: id => dispatch(fetchFullTextByIdActionCreator(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesDashboard)